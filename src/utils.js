const convertSchema = (schema) => {
  const id = Math.random().toString(36).substr(2, 5);
  const obj = { id };

  schema.fields.forEach((field) => {
    obj[field.name] = '';
  });

  return obj;
};

export { convertSchema };
