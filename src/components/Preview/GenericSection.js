import React from 'react';
import { View } from '@react-pdf/renderer';
import { BodyText, Section, Subtitle, Title } from './styled';
import globalStyles from './styles';

export default function GenericSection({ name, data, mappings }) {
  return data.length ? (
    <Section>
      <Title>{name}</Title>
      {data.map((entry, i) => (
        <View
          key={i}
          style={{ marginBottom: i + 1 === data.length ? 0 : 10 }}
          wrap={false}
        >
          <View style={globalStyles.textWithDate}>
            <Subtitle>{entry[mappings[0]]}</Subtitle>
            <BodyText style={[{ color: 'gray' }]}>
              {entry[mappings[1]]} -{' '}
              {entry[mappings[2]] || (entry[mappings[1]] ? 'Present' : '')}
            </BodyText>
          </View>
          <BodyText style={[{ marginBottom: 5 }]}>
            {entry[mappings[3]]}
          </BodyText>
          <BodyText>{entry[mappings[4]]}</BodyText>
        </View>
      ))}
    </Section>
  ) : null;
}
