import { useMemo, useReducer, createContext, useContext } from 'react';
import formSchema from './formSchema';
import { formContextReducer } from './reducers/formReducer';
import { convertFormBlockSchema } from './utils';

const FormContext = createContext(null);

const FormProvider = (props) => {
  const [data, dispatch] = useReducer(
    formContextReducer,
    convertFormBlockSchema(formSchema)
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
  if (context === undefined) {
    throw new Error('useFormReducer must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormReducer };
