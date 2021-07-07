import React, { useState } from 'react';
import cvFormSchema from './schema/cvForm';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Preview from './components/Preview';
import Form from './components/Form';
import { FormProvider } from './context';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = (errors) => {
    if (errors.length) {
      setErrorMessages(errors.map((error) => error.join(': ')));
      window.scrollTo(0, 0);
    } else {
      setErrorMessages([]);
      setShowPreview(true);
    }
  };

  return (
    <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper square={true} elevation={3} component="header">
        <Box
          height="4rem"
          width="90%"
          mb={3}
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <h1 className="header__title">CV Maker</h1>
        </Box>
      </Paper>
      <Container maxWidth={'md'}>
        <Box mb={3}>
          {errorMessages.length !== 0 && (
            <Alert severity="error" style={{ width: '100%' }}>
              <AlertTitle>Error</AlertTitle>
              <ul style={{ margin: 0, padding: 0 }}>
                {errorMessages.map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </Alert>
          )}
        </Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormProvider schema={cvFormSchema}>
            {showPreview ? (
              <Box mt={3}>
                <Box p={2} mb={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowPreview(false)}
                  >
                    Go Back to Editing
                  </Button>
                </Box>
                <Preview />
              </Box>
            ) : (
              <Form schema={cvFormSchema} onSubmit={handleSubmit} />
            )}
          </FormProvider>
        </MuiPickersUtilsProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
