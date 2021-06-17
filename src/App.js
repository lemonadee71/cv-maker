import React, { useReducer, useMemo, useState } from 'react';
import { appContextReducer } from './reducers/AppReducer';
import { AppProvider } from './context';
import { convertFormBlockSchema } from './utils';
import formSchema from './formSchema';

import Container from '@material-ui/core/Container';
import FormBlock from './components/FormBlock';
import Preview from './components/Preview';
import './styles.css';

const App = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [state, dispatch] = useReducer(
    appContextReducer,
    convertFormBlockSchema(formSchema)
  );
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const togglePreview = () => {
    setShowPreview((val) => !val);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">CV Maker</h1>
      </header>
      <button onClick={togglePreview}>Toggle preview</button>
      <AppProvider value={contextValue}>
        <Container maxWidth={'sm'}>
          {showPreview ? (
            <Preview data={state} />
          ) : (
            Object.entries(state).map(([name, { id, groups, schema }]) => (
              <FormBlock
                key={id}
                blockName={name}
                groups={groups}
                schema={schema}
                variant={schema.variant}
              />
            ))
          )}
        </Container>
      </AppProvider>
    </>
  );
};

export default App;
