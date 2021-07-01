import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { globalStyles } from './styles';

const styles = StyleSheet.create({
  entry: {
    marginBottom: 15,
  },
});

export default function EducationSection() {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.title}>Education</Text>
      <View style={styles.entry}>
        <Text style={globalStyles.subtitle}>New York University</Text>
        <Text style={globalStyles.bodyText}>Master of Arts in Economics</Text>
        <Text style={globalStyles.bodyText}>2010 - 2012</Text>
      </View>
      <View style={styles.entry}>
        <Text style={globalStyles.subtitle}>New York University</Text>
        <Text style={globalStyles.bodyText}>Master of Arts in Economics</Text>
        <Text style={globalStyles.bodyText}>2010 - 2012</Text>
      </View>
    </View>
  );
}
