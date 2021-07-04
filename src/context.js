import { createContext, useContext, useMemo, useReducer } from 'react';
import { convertFormBlockSchema, convertFormGroupSchema } from './utils/index';

const formContextReducer = (schema) => (state, action) => {
  const { blockName, groupId, data } = action.payload;
  const block = state[blockName];

  switch (action.type) {
    case 'WRITE':
      return data;
    case 'ADD':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: [
            ...block.groups,
            convertFormGroupSchema(schema[blockName].fields),
          ],
        },
      };
    case 'DELETE':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: block.groups.filter((group) => group.id !== groupId),
        },
      };
    case 'UPDATE':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: block.groups.map((group) => {
            if (group.id === groupId) return { ...group, fields: data };

            return group;
          }),
        },
      };
    default:
      return state;
  }
};

const FormContext = createContext(null);

const FormProvider = (props) => {
  const [data, dispatch] = useReducer(
    formContextReducer(props.schema),
    convertFormBlockSchema(props.schema)
  );
  const contextValue = useMemo(() => ({ data, dispatch }), [data, dispatch]);

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

const useFormReducer = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormReducer must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormReducer };
