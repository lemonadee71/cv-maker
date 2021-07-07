import React from 'react';
import { BodyText, Section, Title } from './styled';

export default function Profile({ data }) {
  return data ? (
    <Section>
      <Title>Profile</Title>
      <BodyText style={[{ textAlign: 'justify' }]}>{data}</BodyText>
    </Section>
  ) : null;
}
