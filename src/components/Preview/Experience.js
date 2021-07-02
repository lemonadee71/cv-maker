import React from 'react';
import { View } from '@react-pdf/renderer';
import { BodyText, Section, Subtitle, Title } from './styles';

export default function ExperienceSection({ data }) {
  return (
    <Section style={[{ borderBottom: 'none' }]}>
      <Title>Work Experience</Title>
      {data.map((entry, i) => (
        <View key={i} style={{ marginBottom: i === data.length ? 0 : 20 }}>
          <Subtitle>{entry.position}</Subtitle>
          <BodyText style={[{ marginBottom: 5 }]}>
            {entry.company} / {entry.startDate} - {entry.endDate || 'Present'}
          </BodyText>
          <BodyText style={[{ textAlign: 'justify' }]}>
            {entry.description}
          </BodyText>
        </View>
      ))}
    </Section>
  );
}
