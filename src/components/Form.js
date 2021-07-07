import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormBlock from './FormBlock';

const Form = ({ schema, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
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
