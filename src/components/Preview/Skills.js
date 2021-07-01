import React from 'react';
import { BodyText, Section, Title } from './styles';

export default function Profile({ data }) {
  return (
    <Section>
      <Title>Skills</Title>
      {data.split(',').map((skill) => (
        <BodyText style={[{ marginBottom: 5 }]}>- {skill.trim()}</BodyText>
      ))}
    </Section>
  );
}
