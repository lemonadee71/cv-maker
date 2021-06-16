import React from 'react';
import { useAppReducer } from '../context';

import TextField from '@material-ui/core/TextField';

const FormGroup = ({ blockId, id, fields, variant }) => {
  const { dispatch } = useAppReducer();

  // TODO: Structure state in a way that only one form group gets rerendered
  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('data-fieldname');
    const fieldData = fields[fieldName];
    const newFieldData = { ...fieldData, value: e.target.value };

    dispatch({
      type: 'EDIT',
      payload: {
        blockId,
        groupId: id,
        data: { ...fields, [fieldName]: newFieldData },
      },
    });
  };

  // const [data, setData] = useState(fields);
  // const handleChange = (e) => {
  //   e.preventDefault();

  //   setData({ ...data, [fieldName]: newFieldData });

  //   changeHandler({ id, data });
  // };

  const inputFields = Object.entries(fields).map(
    ([name, { value, schema, error }]) => {
      const props = {
        value,
        error,
        variant,
        key: name,
        className: 'form-block__field',
        inputProps: { 'data-fieldname': name },
        InputLabelProps: schema.type === 'date' ? { shrink: true } : null,
        type: schema.type !== 'multiline' ? schema.type : 'text',
        label: schema.displayName,
        defaultValue: schema.defaultValue,
        helperText: schema.helperText || '',
        fullWidth: schema.fullWidth || true,
        required: schema.required,
        autoComplete: schema.autoComplete,
        rows: schema.rows,
      };

      if (schema.type === 'multiline') {
        props.multiline = true;
      }

      return <TextField {...props} onChange={handleChange} />;
    }
  );

  return (
    <div>
      <form>{inputFields}</form>
    </div>
  );
};

export default FormGroup;
