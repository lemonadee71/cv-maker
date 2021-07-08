import React from 'react';
import { Page, Document, StyleSheet, View } from '@react-pdf/renderer';

import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import GenericSection from './GenericSection';

const styles = StyleSheet.create({
  page: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 40,
    // fontFamily: 'Times-Roman',
  },
});

const PDF = ({ data }) => {
  const content = [
    (withDivider) => (
      <GenericSection
        name="Experience"
        data={data.experience}
        mappings={[
          'position',
          'startDate',
          'endDate',
          'company',
          'description',
        ]}
        withDivider={withDivider}
      />
    ),
    (withDivider) => (
      <GenericSection
        name="Education"
        data={data.education}
        mappings={['school', 'startDate', 'endDate', 'degree']}
        withDivider={withDivider}
      />
    ),
    (withDivider) => (
      <GenericSection
        name="Training / Certifications"
        data={data.training}
        mappings={['name', 'startDate', 'endDate']}
        withDivider={withDivider}
      />
    ),
    (withDivider) => (
      <Skills data={data.personal[0].skills} withDivider={withDivider} />
    ),
  ];

  return (
    <Document className="preview">
      <Page size="A4" style={styles.page} wrap>
        <Header data={data.personal[0]} />
        <Profile data={data.personal[0].details} />
        {content.map((section, i) => (
          <View key={i}>{section(i + 1 !== content.length)}</View>
        ))}
      </Page>
    </Document>
  );
};

export default PDF;
