import { createContext, useContext } from 'react';

const FormContext = createContext(null);
const FormProvider = FormContext.Provider;

const useFormReducer = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormReducer must be used within a FormProvider');
  }
  return context;
};

export { FormProvider, useFormReducer };
