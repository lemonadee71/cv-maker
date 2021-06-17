import React from 'react';
import FormGroup from './FormGroup';

const FormBlock = ({ blockName, groups, schema, variant }) => {
  return (
    <div className="form-block" data-blockname={blockName}>
      <h2 className="form-block__header">{schema.displayName}</h2>
      {groups.map((group) => (
        <FormGroup
          key={group.id}
          blockName={blockName}
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
