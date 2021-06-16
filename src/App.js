import React, { useReducer, useMemo } from 'react';
import { appContextReducer } from './reducers/AppReducer';
import { AppProvider } from './context';
import { convertFormBlockSchema } from './utils';
import formSchema from './formSchema';

import Container from '@material-ui/core/Container';
import FormBlock from './components/FormBlock';
import './styles.css';

const App = () => {
  const [state, dispatch] = useReducer(
    appContextReducer,
    convertFormBlockSchema(formSchema)
  );
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <>
      <header className="header">
        <h1 className="header__title">CV Maker</h1>
      </header>
      <AppProvider value={contextValue}>
        <Container maxWidth={'sm'}>
          {Object.entries(state).map(([id, { name, groups, schema }]) => (
            <FormBlock
              key={id}
              blockName={name}
              blockId={id}
              groups={groups}
              schema={schema}
              variant={schema.variant}
            />
          ))}
        </Container>
      </AppProvider>
    </>
  );
};

export default App;
