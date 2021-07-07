import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { Section, Title } from './styled';

const style = StyleSheet.create({
  skills: {
    display: 'flex',
    flexDirection: 'row',
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

export default function Skills({ data }) {
  return data ? (
    <Section>
      <Title>Skills</Title>
      <View style={[style.skills]}>
        {data.split(',').map((skill, i) => (
          <View key={i} style={[style.chip, { marginBottom: 5 }]}>
            <Text>{skill.trim()}</Text>
          </View>
        ))}
      </View>
    </Section>
  ) : null;
}
