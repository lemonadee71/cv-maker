import React from 'react';
import EducationSection from './Education';
import ExperienceSection from './ExperienceSection';
import PersonalInfo from './PersonalInfo';
import {
  Page,
  Document,
  StyleSheet,
  View,
  Text,
  PDFViewer,
} from '@react-pdf/renderer';
import { useFormReducer } from '../../context';
import Header from './Header';
import { globalStyles } from './styles';

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
// });

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
    border: '1px solid blue',
  },
  leftColumn: {
    display: 'flex',
    width: '35%',
    padding: 10,
  },
  rightColumn: {
    display: 'flex',
    width: '55%',
    padding: 10,
    borderLeft: '1.5px solid gray',
  },
});

const Preview = () => {
  const { data } = useFormReducer();

  return (
    <PDFViewer width="100%" height="700px">
      <Document className="preview">
        <Page size="A4" style={styles.page}>
          <Header />
          <View style={styles.content}>
            <View style={styles.leftColumn}>
              <EducationSection />
              <EducationSection />
            </View>
            <View style={styles.rightColumn}></View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Preview;
