import React from 'react';
import {
  Page,
  Document,
  StyleSheet,
  View,
  PDFViewer,
} from '@react-pdf/renderer';
import { useFormReducer } from '../../context';
import data from '../../defaultData.json';

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
  // const { data } = useFormReducer();

  return (
    <PDFViewer width="100%" height="700px">
      <Document className="preview">
        <Page size="A4" style={styles.page}>
          <Header data={data.personal} />
          <View style={styles.content}>
            <View style={styles.leftColumn}>
              <EducationSection data={data.education} />
              <Skills data={data.personal.skills} />
            </View>
            <View style={styles.rightColumn}>
              <Profile data={data.personal.details} />
              <ExperienceSection data={data.experience} />
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Preview;
