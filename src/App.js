import React, { useState } from 'react';
import formSchema from './formSchema';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Preview from './components/Preview';
import Form from './components/Form';
import { FormProvider } from './context';
import { reduceToValue } from './utils';

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
  const [showPreview, setShowPreview] = useState(true);

  const handleSubmit = (data) => {
    console.log(JSON.stringify(reduceToValue(data), null, 2));
  };

  return (
    <>
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
          <FormProvider schema={formSchema}>
            {showPreview ? (
              <Preview />
            ) : (
              <Form schema={formSchema} onSubmit={handleSubmit} />
            )}
          </FormProvider>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
