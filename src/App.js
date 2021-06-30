import React, { useState } from 'react';
import formSchema from './formSchema';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PDFViewer } from '@react-pdf/renderer';
import Preview from './components/Preview';
import Form from './components/Form';
import { FormProvider } from './context';

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

  const validate = (e) => {
    e.preventDefault();
  };

  console.log('Rendered app');

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
          <FormProvider schema={formSchema}>
            {showPreview ? (
              <Preview />
            ) : (
              <Form schema={formSchema} onSubmit={validate} />
            )}
          </FormProvider>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
