import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { useFormReducer } from '../context';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PhoneField from 'material-ui-phone-number';

const FormGroup = ({
  id,
  blockName,
  blockStyle,
  fields,
  data,
  multiple,
  deleteHandler,
}) => {
  console.log(blockName, data);
  const [formData, setFormData] = useState(data);
  const [debouncedCurrentData, setCurrentData] = useDebounce(data, 300);
  const { dispatch } = useFormReducer();
  // console.log('Rendered ' + blockName + id);

  useEffect(() => {
    console.log('---------------------');
    dispatch({
      type: 'UPDATE',
      payload: {
        blockName,
        groupId: id,
        data: debouncedCurrentData,
      },
    });
  }, [debouncedCurrentData, id, blockName, dispatch]);

  const validateInput = (name, value) => {
    const fieldSchema = fields[name];
    const errorMsg =
      fieldSchema.required && !value.trim()
        ? 'This field is required'
        : fieldSchema.validate && fieldSchema.validate(value);

    return errorMsg;
  };

  const handleChange = (name, value) => {
    console.log('onchange event');
    const fieldData = formData[name];
    const isInvalid = fieldData.error;
    const newData = { ...fieldData, value };

    if (isInvalid) {
      const errorMsg = validateInput(name, value);
      newData.error = !!errorMsg;
      newData.errorMsg = errorMsg;
    }

    setFormData((prevData) => ({ ...prevData, [name]: newData }));
    setCurrentData({
      ...formData,
      [name]: newData,
    });
  };

  const handleBlur = (name, value) => {
    const errorMsg = validateInput(name, value);

    const newData = {
      value: value,
      error: !!errorMsg,
      errorMsg: errorMsg || '',
    };

    setFormData((prevData) => ({ ...prevData, [name]: newData }));
    setCurrentData({
      ...formData,
      [name]: newData,
    });
  };

  const inputFields = Object.entries(fields).map(([name, schema]) => {
    const props = {
      label: schema.displayName,
      defaultValue: schema.defaultValue,
      value: formData[name].value,
      error: formData[name].error,
      helperText: formData[name].errorMsg || schema.helperText || '',
      inputProps: { 'data-fieldname': name },
      InputLabelProps: schema.type === 'date' ? { shrink: true } : null,
      type: ['multiline', 'phone'].includes(schema.type) ? 'text' : schema.type,
      variant: blockStyle.variant,
      rows: schema.muiStyle.rows,
      fullWidth: schema.muiStyle.fullWidth || true,
      required: schema.required,
      autoComplete: schema.autoComplete,
    };

    if (schema.type === 'multiline') {
      props.multiline = true;
    }

    return (
      <Grid item key={id + name} {...schema.muiStyle.span}>
        {schema.type === 'phone' ? (
          <PhoneField
            {...props}
            defaultCountry={'ph'}
            onBlur={(e) => handleBlur('phone', e.target.value)}
            onChange={(value) => handleChange('phone', value)}
          />
        ) : (
          <TextField
            {...props}
            onChange={(e) =>
              handleChange(
                e.target.getAttribute('data-fieldname'),
                e.target.value
              )
            }
            onBlur={(e) =>
              handleBlur(
                e.target.getAttribute('data-fieldname'),
                e.target.value
              )
            }
          />
        )}
      </Grid>
    );
  });

  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        {inputFields}
      </Grid>

      {multiple && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};

export default FormGroup;
