import React from 'react';
import { useAppReducer } from '../context';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const FormGroup = ({ blockName, id, fields, variant, formGroupStyle }) => {
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

  const inputFields = Object.entries(fields).map(
    ([name, { value, schema, error }]) => {
      const props = {
        value,
        error,
        variant,
        key: name,
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
        <Grid item {...schema.muiStyle}>
          <TextField {...props} onChange={handleChange} />
        </Grid>
      );
    }
  );

  return (
    <form>
      <Grid container {...formGroupStyle}>
        {inputFields}
      </Grid>
    </form>
  );
};

export default FormGroup;
