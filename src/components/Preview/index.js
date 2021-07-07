import React from 'react';
import {
  Page,
  Document,
  StyleSheet,
  View,
  PDFViewer,
} from '@react-pdf/renderer';
import { useFormReducer } from '../../context';
import { reduceToValue } from '../../utils';
import formData from '../../defaultData.json';

import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import GenericSection from './GenericSection';
import { Divider } from './styled';

const styles = StyleSheet.create({
  page: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 40,
    // fontFamily: 'Times-Roman',
  },
});

const Preview = () => {
  // const { data } = useFormReducer();
  // const formData = reduceToValue(data);
  const content = [
    <GenericSection
      name="Experience"
      data={formData.experience}
      mappings={['position', 'startDate', 'endDate', 'company', 'description']}
    />,
    <GenericSection
      name="Education"
      data={formData.education}
      mappings={['school', 'startDate', 'endDate', 'degree']}
    />,
    <GenericSection
      name="Training / Certifications"
      data={formData.training}
      mappings={['name', 'startDate', 'endDate']}
    />,
    <Skills data={formData.personal[0].skills} />,
  ];

  return (
    <PDFViewer width="100%" height="700px">
      <Document className="preview">
        <Page size="A4" style={styles.page} wrap>
          <Header data={formData.personal[0]} />
          <Profile data={formData.personal[0].details} />
          {content.map((section, i) => (
            <View key={i}>
              {section}
              {i + 1 !== content.length ? (
                <Divider mt={5} mb={15} color="gray" />
              ) : null}
            </View>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Preview;
