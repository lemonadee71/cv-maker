import React, { useState, useReducer, useMemo } from 'react';
import { FormProvider } from './context';
import formSchema from './formSchema';
import { convertFormBlockSchema } from './utils';
import { useForm } from './useForm';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PDFViewer } from '@react-pdf/renderer';
import FormBlock from './components/FormBlock';
import Preview from './components/Preview';
import { formContextReducer } from './reducers/formReducer';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App = () => {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');
  const [showPreview, setShowPreview] = useState(false);

  const [state, dispatch] = useReducer(
    formContextReducer,
    convertFormBlockSchema(formSchema)
  );
  const formContextValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  // const formContextValue = useForm(formSchema);
  // const { state } = formContextValue;

  const validate = (e) => {
    e.preventDefault();
    // TODO: Add validation
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
      </Box>
      <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
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
        <Container maxWidth={'md'}>
          {showPreview ? (
            <pre>{JSON.stringify(state, null, 2)}</pre>
          ) : (
            // <PDFViewer height="800" width="100%">
            //   <Preview data={state} />
            // </PDFViewer>
            <>
              <FormProvider value={formContextValue}>
                <form onSubmit={validate}>
                  {Object.entries(formSchema).map(([name, schema]) => (
                    <FormBlock key={name} blockName={name} schema={schema} />
                  ))}
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Box>
                </form>
              </FormProvider>
              <pre>{JSON.stringify(state, null, 2)}</pre>
            </>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
