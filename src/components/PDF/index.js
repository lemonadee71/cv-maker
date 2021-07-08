import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDF from './Document';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useFormReducer } from '../../context';
import { reduceToValue } from '../../utils';
// import formData from '../../defaultData.json';

const Download = () => {
  const matches = useMediaQuery('(min-width:500px)');
  const { data } = useFormReducer();
  const formData = reduceToValue(data);

  return (
    <>
      {matches ? (
        <PDFViewer width="100%" height="700px">
          <PDF data={formData} />
        </PDFViewer>
      ) : (
        <Box p={2} mb={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" size="large">
            <PDFDownloadLink
              document={<PDF data={formData} />}
              fileName="cv.pdf"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {({ loading }) =>
                loading ? 'Loading document...' : 'Download CV'
              }
            </PDFDownloadLink>
          </Button>
        </Box>
      )}
    </>
  );
};

export default Download;
