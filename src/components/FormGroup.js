import React, { useState } from 'react';
import { useFormReducer } from '../context';
import { convertFormGroupSchema } from '../utils';
import formSchema from '../formSchema';

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
  multiple,
  deleteHandler,
}) => {
  const [data, setData] = useState(convertFormGroupSchema(fields).fields);
  const { dispatch } = useFormReducer();

  const dispatchChanges = (fieldName, newData) => {
    setData({ ...data, [fieldName]: newData });

    dispatch({
      type: 'UPDATE',
      payload: {
        data,
        blockName,
        groupId: id,
      },
    });
  };

  // TODO: Structure state in a way that only one form group gets rerendered
  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('data-fieldname');
    const newFieldData = { ...data[fieldName], value: e.target.value };

    dispatchChanges(fieldName, newFieldData);
  };

  const handlePhoneNumberChange = (value) =>
    dispatchChanges('phone', { ...data.phone, value });

  const inputFields = Object.entries(formSchema[blockName].fields).map(
    ([name, schema]) => {
      const props = {
        label: schema.displayName,
        defaultValue: schema.defaultValue,
        value: data[name].value,
        error: data[name].error,
        helperText: data[name].errorMsg || schema.helperText || '',
        inputProps: { 'data-fieldname': name },
        InputLabelProps: schema.type === 'date' ? { shrink: true } : null,
        type: ['multiline', 'phoneNumber'].includes(schema.type)
          ? 'text'
          : schema.type,
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
        <Grid key={name} item {...schema.muiStyle.span}>
          {schema.type === 'phoneNumber' ? (
            <PhoneField
              {...props}
              defaultCountry={'ph'}
              onChange={handlePhoneNumberChange}
            />
          ) : (
            <TextField {...props} onChange={handleChange} />
          )}
        </Grid>
      );
    }
  );

  return (
    <Box mb={3}>
      <Grid container spacing={1}>
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
