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
// import formData from '../../defaultData.json';

import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import EducationSection from './Education';
import ExperienceSection from './Experience';

const styles = StyleSheet.create({
  page: {
    width: '100%',
    margin: 30,
    // fontFamily: 'Times-Roman',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: '80%',
    paddingVertical: 5,
  },
  leftColumn: {
    display: 'flex',
    width: '35%',
    padding: 10,
  },
  rightColumn: {
    display: 'flex',
    width: '65%',
    padding: 10,
    borderLeft: '1.5px solid gray',
  },
});

const Preview = () => {
  const { data } = useFormReducer();
  const formData = reduceToValue(data);
  console.log(JSON.stringify(formData, null, 2));

  return (
    <PDFViewer width="100%" height="700px">
      <Document className="preview">
        <Page size="A4" style={styles.page}>
          <Header data={formData.personal[0]} />
          <View style={styles.content}>
            <View style={styles.leftColumn}>
              <EducationSection data={formData.education} />
              <Skills data={formData.personal[0].skills} />
            </View>
            <View style={styles.rightColumn}>
              <Profile data={formData.personal[0].details} />
              <ExperienceSection data={formData.experience} />
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Preview;
