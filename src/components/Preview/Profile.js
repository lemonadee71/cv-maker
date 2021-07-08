import React from 'react';
import { NormalText, Divider, Section, Title } from './styled';

export default function Profile({ data }) {
  return data ? (
    <>
      <Section>
        <Title>Profile</Title>
        <NormalText textAlign="justify">{data}</NormalText>
      </Section>
      <Divider mt={5} mb={15} color="gray" />
    </>
  ) : null;
}
