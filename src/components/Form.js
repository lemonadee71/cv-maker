import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormBlock from './FormBlock';
import { useFormReducer } from '../context';

const Form = ({ schema, onSubmit }) => {
  const { data } = useFormReducer();

  const validateInput = (value, fieldSchema) => {
    const errorMsg =
      fieldSchema.required && !value.trim()
        ? 'This field is required'
        : fieldSchema.validate && fieldSchema.validate(value);

    return errorMsg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(data).forEach(([blockName, blockData]) => {
      blockData.groups.map((group) => {
        const newGroupData = {};

        Object.entries(group.fields).forEach(([fieldName, value]) => {
          const errorMsg = validateInput(
            value.value,
            schema[blockName].fields[fieldName]
          );

          newGroupData[fieldName] = {
            ...value,
            errorMsg: errorMsg || '',
            error: !!errorMsg,
          };
        });

        return newGroupData;
      });
    });

    onSubmit(data);
    // e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
