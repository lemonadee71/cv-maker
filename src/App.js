import React, { useReducer, useMemo, useState } from 'react';
import { appContextReducer } from './reducers/AppReducer';
import { AppProvider } from './context';
import { convertFormBlockSchema } from './utils';
import formSchema from './formSchema';

import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PDFViewer } from '@react-pdf/renderer';
import FormBlock from './components/FormBlock';
import Preview from './components/Preview';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [state, dispatch] = useReducer(
    appContextReducer,
    convertFormBlockSchema(formSchema)
  );

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    },
  });

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const validate = (e) => {
    e.preventDefault();
    alert('Hello');
  };

  return (
    <>
      <Box
        component="header"
        height="4rem"
        width="90%"
        my={1}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <h1 className="header__title">CV Maker</h1>
        <FormControlLabel
          control={
            <Switch
              checked={darkTheme}
              onChange={toggleDarkTheme}
              name="darkThemeSwitch"
              color="primary"
            />
          }
          label="Dark mode"
        />
      </Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" justifyContent="center" mb={3}>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              color={!showPreview ? 'primary' : 'secondary'}
              onClick={() => setShowPreview(false)}
            >
              Edit
            </Button>
            <Button
              color={showPreview ? 'primary' : 'secondary'}
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
          </ButtonGroup>
        </Box>
        <AppProvider value={contextValue}>
          <Container maxWidth={showPreview ? 'lg' : 'md'}>
            {showPreview ? (
              <PDFViewer height="800" width="100%">
                <Preview data={state} />
              </PDFViewer>
            ) : (
              <form onSubmit={validate}>
                {Object.entries(state).map(([name, { id, groups, schema }]) => (
                  <FormBlock
                    key={id}
                    blockName={name}
                    groups={groups}
                    schema={schema}
                    variant={schema.variant}
                  />
                ))}
                <Box display="flex" justifyContent="center" mb={3}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Container>
        </AppProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
