import React from 'react';
import { BodyText, Section, Title } from './styles';

export default function Skills({ data }) {
  return data ? (
    <Section>
      <Title>Skills</Title>
      {data.split(',').map((skill, i) => (
        <BodyText key={i} style={[{ marginBottom: 5 }]}>
          - {skill.trim()}
        </BodyText>
      ))}
    </Section>
  ) : null;
}
