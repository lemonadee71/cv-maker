import React from 'react';
import { View } from '@react-pdf/renderer';
import { BodyText, Section, Subtitle, Title } from './styled';
import globalStyles from './styles';

export default function ExperienceSection({ data }) {
  return data.length ? (
    <Section>
      <Title>Work Experience</Title>
      {data.map((entry, i) => (
        <View
          key={i}
          style={{ marginBottom: i + 1 === data.length ? 0 : 10 }}
          wrap={false}
        >
          <View style={globalStyles.textWithDate}>
            <Subtitle>{entry.position}</Subtitle>
            <BodyText style={[{ color: 'gray' }]}>
              {entry.startDate} - {entry.endDate || 'Present'}
            </BodyText>
          </View>
          <BodyText style={[{ marginBottom: 5 }]}>{entry.company}</BodyText>
          <BodyText style={[{ textAlign: 'justify' }]}>
            {entry.description}
          </BodyText>
        </View>
      ))}
    </Section>
  ) : null;
}
