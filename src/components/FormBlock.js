import React, { useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormGroup from './FormGroup';
import { useFormReducer } from '../context';
import { uniqid } from '../utils';
import { useEffect } from 'react';

const FormBlock = ({ blockName, schema }) => {
  const [groups, setGroups] = useState([]);
  const { dispatch } = useFormReducer();

  console.log('Rendered', blockName);

  const handleAdd = useCallback(() => {
    const id = uniqid();
    setGroups((grps) => [...grps, id]);

    dispatch({
      type: 'ADD',
      payload: {
        blockName,
        groupId: id,
      },
    });
  }, [blockName, dispatch]);

  const handleDelete = (id) => {
    setGroups((grps) => grps.filter((grpId) => grpId !== id));

    dispatch({
      type: 'DELETE',
      payload: {
        blockName,
        groupId: id,
      },
    });
  };

  useEffect(() => {
    handleAdd();
  }, [handleAdd]);

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom>
        {schema.displayName}
      </Typography>

      {groups.map((id) => (
        <FormGroup
          key={id}
          id={id}
          blockName={blockName}
          blockStyle={schema.muiStyle}
          fields={schema.fields}
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
