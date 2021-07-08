import React from 'react';
import {
  Divider,
  NormalText,
  Section,
  Subtitle,
  Title,
  Wrapper,
} from './styled';

export default function GenericSection({ name, data, mappings, withDivider }) {
  return data.length ? (
    <>
      <Section>
        <Title>{name}</Title>
        {data.map((entry, i) => (
          <Wrapper
            key={i}
            wrap={false}
            marginBottom={i + 1 === data.length ? 0 : 10}
          >
            <Wrapper
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Subtitle>{entry[mappings[0]]}</Subtitle>
              <NormalText color="gray">
                {entry[mappings[1]]} -{' '}
                {entry[mappings[2]] || (entry[mappings[1]] ? 'Present' : '')}
              </NormalText>
            </Wrapper>
            <NormalText marginBottom={5}>{entry[mappings[3]]}</NormalText>
            <NormalText>{entry[mappings[4]]}</NormalText>
          </Wrapper>
        ))}
      </Section>
      {withDivider ? <Divider mt={5} mb={15} color="gray" /> : null}
    </>
  ) : null;
}
