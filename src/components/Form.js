import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormBlock from './FormBlock';

// TODO: Structure state in a way that only one form group gets rerendered
const Form = ({ schema, onSubmit }) => {
  console.log('Rendered form');

  return (
    <form onSubmit={onSubmit}>
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
