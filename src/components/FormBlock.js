import React from 'react';
import FormGroup from './FormGroup';

const FormBlock = ({ blockName, blockId, groups, schema, variant }) => {
  return (
    <div class="form-block" data-blockname={blockName}>
      <h2 class="form-block__header">{schema.displayName}</h2>
      {groups.map((group) => (
        <FormGroup
          key={group.id}
          blockId={blockId}
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
