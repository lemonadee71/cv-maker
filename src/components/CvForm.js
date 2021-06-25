import React from 'react';
import { useFormReducer } from '../context';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormBlock from './FormBlock';

const CvForm = ({ schema, onSubmit }) => {
  const { data } = useFormReducer();

  return (
    <>
      <form onSubmit={onSubmit}>
        {Object.entries(data).map(([name, { id, groups }]) => (
          <FormBlock
            key={id}
            blockName={name}
            schema={schema[name]}
            data={groups}
          />
        ))}
        <Box display="flex" justifyContent="center" mb={3}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CvForm;
