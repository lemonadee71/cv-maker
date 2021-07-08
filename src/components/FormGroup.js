import React, { useEffect } from 'react';
import { useDebounce } from '../hooks';
import { useFormReducer } from '../context';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PhoneField from 'material-ui-phone-number';
import { DatePicker } from '@material-ui/pickers';

const FormGroup = ({
  id,
  blockName,
  blockStyle,
  fields,
  data,
  multiple,
  deleteHandler,
}) => {
  const [debouncedFormData, formData, setFormData] = useDebounce(data, 300);
  const { dispatch } = useFormReducer();

  useEffect(() => {
    dispatch({
      type: 'UPDATE',
      payload: {
        blockName,
        groupId: id,
        data: debouncedFormData,
      },
    });
  }, [debouncedFormData, id, blockName, dispatch]);

  // This is used to reflect the errors caught on submit
  // * Remove if there's onsubmit validation
  // ! This may cause unnecessary renders
  useEffect(() => {
    setFormData(data);
  }, [data, setFormData]);

  const validateInput = (name, value) => {
    const fieldSchema = fields[name];
    const errorMsg =
      fieldSchema.required && !value.trim()
        ? 'This field is required'
        : fieldSchema.validate && fieldSchema.validate(value);

    return errorMsg;
  };

  const handleChange = (name, value) => {
    const fieldData = formData[name];
    const isInvalid = fieldData.error;
    const newData = { ...fieldData, value };

    if (isInvalid) {
      const errorMsg = validateInput(name, value);
      newData.error = !!errorMsg;
      newData.errorMsg = errorMsg;
    }
    setFormData((prevData) => ({ ...prevData, [name]: newData }));
  };

  const handleBlur = (name, value) => {
    const errorMsg = validateInput(name, value);

    const newData = {
      value: value,
      error: !!errorMsg,
      errorMsg: errorMsg || '',
    };

    setFormData((prevData) => ({ ...prevData, [name]: newData }));
  };

  const createInput = (type, name, props) => {
    switch (type) {
      case 'phone':
        return (
          <PhoneField
            {...props}
            defaultCountry={'ph'}
            onBlur={(e) => handleBlur(name, e.target.value)}
            onChange={(value) => handleChange(name, value)}
          />
        );
      case 'date':
        return (
          <DatePicker
            {...props}
            onChange={(date) => handleChange(name, date)}
            onAccept={(date) => handleBlur(name, date)}
            placeholder="14/01/1970"
            format="dd/MM/yyyy"
            inputVariant="outlined"
            clearable
            disableFuture
          />
        );
      default:
        return (
          <TextField
            {...props}
            type={type === 'multiline' ? 'text' : type}
            onChange={(e) => handleChange(name, e.target.value)}
            onBlur={(e) => handleBlur(name, e.target.value)}
          />
        );
    }
  };

  const inputFields = Object.entries(fields).map(([name, schema]) => {
    const props = {
      label: schema.displayName,
      defaultValue: schema.defaultValue,
      value: formData[name].value || (schema.type === 'date' ? null : ''),
      error: formData[name].error || false,
      helperText: formData[name].errorMsg || schema.helperText || '',
      placeholder: schema.placeholder || '',
      inputProps: { name },
      InputLabelProps: schema.type === 'date' ? { shrink: true } : null,
      variant: blockStyle.variant,
      rows: schema.muiStyle.rows,
      fullWidth: schema.muiStyle.fullWidth || true,
      required: schema.required,
      // autoComplete: schema.autocomplete,
    };

    if (schema.type === 'multiline') {
      props.multiline = true;
    }

    return (
      // Assume that schema always has muiStyle
      <Grid item key={id + name} {...schema.muiStyle.span}>
        {createInput(schema.type, name, props)}
      </Grid>
    );
  });

  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        {inputFields}
      </Grid>

      {multiple && (
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FormGroup;
