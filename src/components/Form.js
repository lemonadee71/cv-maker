import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormBlock from './FormBlock';
import { useFormReducer } from '../context';

const Form = ({ schema, onSubmit }) => {
  const { data, dispatch } = useFormReducer();

  const validateInput = (value, fieldSchema) => {
    const errorMsg =
      fieldSchema.required && !value.trim()
        ? 'This field is required'
        : fieldSchema.validate && fieldSchema.validate(value);

    return errorMsg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {};
    let errors = [];

    Object.entries(data).forEach(([blockName, data]) => {
      newData[blockName] = {
        ...data,
        groups: data.groups.map((group) => {
          const newGroupData = {};

          Object.entries(group.fields).forEach(([fieldName, value]) => {
            const fieldSchema = schema[blockName].fields[fieldName];

            const errorMsg = validateInput(value.value, fieldSchema);

            if (errorMsg) {
              errors.push([fieldSchema.displayName, errorMsg]);
            }

            newGroupData[fieldName] = {
              ...value,
              errorMsg: errorMsg || '',
              error: !!errorMsg,
            };
          });

          return { id: group.id, fields: newGroupData };
        }),
      };
    });

    dispatch({
      type: 'WRITE',
      payload: {
        data: newData,
      },
    });

    onSubmit(errors);
    // e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      {Object.entries(schema).map(([name, blockSchema]) => (
        <FormBlock key={name} blockName={name} schema={blockSchema} />
      ))}
      <Box display="flex" justifyContent="center" mb={3}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
