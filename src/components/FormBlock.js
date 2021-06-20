import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormGroup from './FormGroup';
import { useAppReducer } from '../context';

const FormBlock = ({ blockName, groups, schema, variant }) => {
  const { dispatch } = useAppReducer();

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
      payload: {
        blockName,
      },
    });
  };

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom>
        {schema.displayName}
      </Typography>
      {groups.map((group) => (
        <FormGroup
          key={group.id}
          blockName={blockName}
          formGroupSchema={schema}
          id={group.id}
          fields={group.fields}
          variant={variant}
        />
      ))}
      {!schema.fixed && (
        <Box mt={1}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add {blockName}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FormBlock;
