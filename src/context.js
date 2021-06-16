import { createContext, useContext } from 'react';

const AppContext = createContext(null);
const AppProvider = AppContext.Provider;

const useAppReducer = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppReducer must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppReducer };
