import React from 'react';
import { BodyText, Section, Title } from './styles';

export default function Profile({ data }) {
  return (
    <Section>
      <Title>Profile</Title>
      <BodyText style={[{ textAlign: 'justify' }]}>{data}</BodyText>
    </Section>
  );
}
