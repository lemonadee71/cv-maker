import React, { useReducer, useEffect, useMemo } from 'react';
import AppContext, { contextReducer } from './context';
import schemas from './schema.json';

import Form from './components/Form';
import Container from '@material-ui/core/Container';

const App = () => {
  const [state, dispatch] = useReducer(contextReducer, {
    personal: [],
    experience: [],
    education: [],
  });

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    dispatch({
      type: 'ADD',
      payload: { key: 'personal', schema: schemas.personal },
    });
    dispatch({
      type: 'ADD',
      payload: { key: 'experience', schema: schemas.experience },
    });

    dispatch({
      type: 'ADD',
      payload: { key: 'education', schema: schemas.education },
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h2>CV Maker</h2>
      </header>
      <AppContext.Provider value={contextValue}>
        <Container>
          <h1>This is my CV Maker</h1>
          <div data-name="personal">
            <h2>Personal Information</h2>
            {state.personal.map((data) => (
              <Form
                key={data.id}
                type={'personal'}
                data={data}
                schema={schemas.personal}
              ></Form>
            ))}
          </div>
          <div data-name="experience">
            <h2>Work Experience</h2>
            {state.experience.map((data) => (
              <Form
                key={data.id}
                type={'experience'}
                data={data}
                schema={schemas.experience}
              ></Form>
            ))}
          </div>
          <div data-name="education">
            <h2>Education</h2>
            {state.education.map((data) => (
              <Form
                key={data.id}
                type={'education'}
                data={data}
                schema={schemas.education}
              ></Form>
            ))}
          </div>
        </Container>
      </AppContext.Provider>
      <button onClick={() => console.log(state)}>Show</button>
    </div>
  );
};

export default App;
