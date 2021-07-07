import React from 'react';
import { BodyText, Divider, Section, Title } from './styled';

export default function Profile({ data }) {
  return data ? (
    <>
      <Section>
        <Title>Profile</Title>
        <BodyText style={[{ textAlign: 'justify' }]}>{data}</BodyText>
      </Section>
      <Divider mt={5} mb={15} color="gray" />
    </>
  ) : null;
}
