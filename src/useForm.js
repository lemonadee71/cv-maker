import { useMemo, useReducer } from 'react';
import { convertFormBlockSchema } from './utils';
import { formContextReducer } from './reducers/formReducer';

export const useForm = (formSchema) => {
  const [state, dispatch] = useReducer(
    formContextReducer,
    convertFormBlockSchema(formSchema)
  );

  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
};
