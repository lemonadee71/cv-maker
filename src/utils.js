const uniqid = () => Math.random().toString(36).substr(2, 5);

const convertFormGroupSchema = (fields) => {
  const obj = { id: uniqid(), fields: {} };

  Object.entries(fields).forEach(([name, schema]) => {
    obj.fields[name] = {
      value: schema.defaultValue || '',
      error: false,
      errorMsg: '',
    };
  });

  return obj;
};

const convertFormBlockSchema = (schema) => {
  const obj = {};

  Object.entries(schema).forEach(([name, schema]) => {
    obj[name] = [];
  });

  return obj;
};

const capitalizeEach = (type, str) => {
  const separator = type === 'word' ? ' ' : '.';

  return str
    .split(separator)
    .map(
      (str) =>
        str && str[0].toUpperCase() + str.substr(1, str.length).toLowerCase()
    )
    .join(separator);
};

export {
  convertFormBlockSchema,
  convertFormGroupSchema,
  capitalizeEach,
  uniqid,
};
