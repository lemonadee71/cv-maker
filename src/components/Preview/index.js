import React from 'react';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import PersonalInfo from './PersonalInfo';
import { Page, Document, StyleSheet, Text, View } from '@react-pdf/renderer';
import { PersonIcon } from '../Icons';

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Preview = ({ data }) => {
  return (
    <Document className="preview">
      <Page size="A4" style={styles.page}>
        <View style={styles.section}></View>
        <View style={styles.section}>
          <Text>Section #2</Text>
          <PersonIcon />
        </View>
      </Page>
    </Document>
  );
};

export default Preview;
