import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { BodyText, Section, Subtitle, Title } from './styles';

const styles = StyleSheet.create({
  entry: {
    marginBottom: 15,
  },
});

export default function EducationSection({ data }) {
  return (
    <Section>
      <Title>Education</Title>
      {data.map((entry, i) => (
        <View key={i} style={styles.entry}>
          <Subtitle>{entry.school}</Subtitle>
          <BodyText>{entry.degree}</BodyText>
          <BodyText>
            {entry.startDate} - {entry.endDate || 'Present'}
          </BodyText>
        </View>
      ))}
    </Section>
  );
}
