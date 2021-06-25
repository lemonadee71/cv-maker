import React, { useCallback } from 'react';
import { useFormReducer } from '../context';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormGroup from './FormGroup';

const FormBlock = ({ blockName, schema, data }) => {
  const { dispatch } = useFormReducer();

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD',
      payload: {
        blockName,
      },
    });
  }, [blockName, dispatch]);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      payload: {
        blockName,
        groupId: id,
      },
    });
  };

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom>
        {schema.displayName}
      </Typography>

      {data.map(({ id, fields }) => (
        <FormGroup
          key={id}
          id={id}
          blockName={blockName}
          blockStyle={schema.muiStyle}
          fields={schema.fields}
          data={fields}
          multiple={schema.multiple}
          deleteHandler={handleDelete}
        />
      ))}
      {schema.multiple && (
        <Box mt={1}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add {schema.displayName}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FormBlock;
