import React, { useContext } from 'react';
import AppContext from '../context';
import TextField from '@material-ui/core/TextField';

const Form = ({ type, data, schema, removable = false }) => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('data-fieldname');

    dispatch({
      type: 'EDIT',
      payload: {
        key: type,
        data: {
          ...data,
          [fieldName]: e.target.value,
        },
      },
    });
  };

  const children = schema.fields.map((field) => {
    switch (field.type) {
      case 'textarea':
        return (
          <TextField
            multiline
            inputProps={{ 'data-fieldname': field.name }}
            label={field.name}
            defaultValue={field.defaultValue}
            value={data[field.name]}
            variant="outlined"
            onChange={handleChange}
          />
        );
      default:
        return (
          <TextField
            type={field.type}
            inputProps={{ 'data-fieldname': field.name }}
            label={field.name}
            defaultValue={field.defaultValue}
            value={data[field.name]}
            variant="outlined"
            onChange={handleChange}
          />
        );
    }
  });

  return (
    <div>
      {removable && <button class="remove-button">X</button>}
      <form>{children}</form>
    </div>
  );
};

export default Form;
