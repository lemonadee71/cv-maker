import React from 'react';
import FormGroup from './FormGroup';
import Typography from '@material-ui/core/Typography';

const FormBlock = ({ blockName, groups, schema, variant }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {schema.displayName}
      </Typography>
      {groups.map((group) => (
        <FormGroup
          key={group.id}
          blockName={blockName}
          formGroupStyle={schema.muiStyle}
          id={group.id}
          type={blockName}
          fields={group.fields}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default FormBlock;
