import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import { Divider, Section, Title, Wrapper } from './styled';

const style = StyleSheet.create({
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    fontSize: 11,
    border: '1px solid gray',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 3,
  },
});

export default function Skills({ data, withDivider }) {
  return data ? (
    <>
      <Section>
        <Title>Skills</Title>
        <Wrapper {...style.skills}>
          {data.split(',').map((skill, i) => (
            <Wrapper
              key={i}
              {...style.chip}
              marginBottom={i + 1 === data.length ? 0 : 5}
            >
              <Text>{skill.trim()}</Text>
            </Wrapper>
          ))}
        </Wrapper>
      </Section>
      {withDivider ? <Divider mt={5} mb={15} color="gray" /> : null}
    </>
  ) : null;
}
