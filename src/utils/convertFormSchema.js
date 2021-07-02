import { uniqid } from './uniqid';

export const convertFormGroupSchema = (fields) => {
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

export const convertFormBlockSchema = (schema) => {
  const obj = {};

  Object.entries(schema).forEach(([name, schema]) => {
    obj[name] = {
      id: uniqid(),
      groups: new Array(schema.defaultGroups ?? 1)
        .fill()
        .map(() => convertFormGroupSchema(schema.fields)),
    };
  });

  return obj;
};
