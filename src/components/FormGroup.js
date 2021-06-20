import React from 'react';
import { useAppReducer } from '../context';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const FormGroup = ({ blockName, id, fields, variant, formGroupSchema }) => {
  const { dispatch } = useAppReducer();

  // TODO: Structure state in a way that only one form group gets rerendered
  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('data-fieldname');
    const fieldData = fields[fieldName];
    const newFieldData = { ...fieldData, value: e.target.value };

    dispatch({
      type: 'EDIT',
      payload: {
        blockName,
        groupId: id,
        data: { ...fields, [fieldName]: newFieldData },
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE',
      payload: {
        blockName,
        groupId: id,
      },
    });
  };

  const inputFields = Object.entries(fields).map(
    ([name, { value, schema, error }]) => {
      const props = {
        value,
        error,
        variant,
        className: 'form-block__field',
        inputProps: { 'data-fieldname': name },
        InputLabelProps: schema.type === 'date' ? { shrink: true } : null,
        type: schema.type !== 'multiline' ? schema.type : 'text',
        label: schema.displayName,
        defaultValue: schema.defaultValue,
        helperText: schema.helperText || '',
        fullWidth: schema.fullWidth || true,
        required: schema.required,
        autoComplete: schema.autoComplete,
        rows: schema.rows,
      };

      if (schema.type === 'multiline') {
        props.multiline = true;
      }

      return (
        <Grid key={name} item {...schema.muiStyle}>
          <TextField {...props} onChange={handleChange} />
        </Grid>
      );
    }
  );

  return (
    <Box mb={3}>
      <Grid container {...formGroupSchema.muiStyle}>
        {inputFields}
      </Grid>

      {!formGroupSchema.fixed && (
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </Box>
  );
};

export default FormGroup;
