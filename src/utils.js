const uniqid = () => Math.random().toString(36).substr(2, 5);

const convertFormGroupSchema = (fields) => {
  const obj = { id: uniqid(), fields: {} };

  fields.forEach((field) => {
    obj.fields[field.name] = {};
    obj.fields[field.name].value = '';
    obj.fields[field.name].error = false;
    obj.fields[field.name].schema = field;
  });

  return obj;
};

const convertFormBlockSchema = (schema) => {
  const obj = {};

  schema.forEach((block) => {
    const id = uniqid();

    obj[block.name] = { id };
    obj[block.name].groups = [convertFormGroupSchema(block.fields)];
    obj[block.name].schema = { ...block, fields: undefined };
  });

  return obj;
};

export { convertFormBlockSchema, convertFormGroupSchema, uniqid };
