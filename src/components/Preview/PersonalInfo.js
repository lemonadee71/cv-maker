import React from 'react';
import { capitalizeEach } from '../../utils';
import Chip from '@material-ui/core/Chip';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    marginBottom: 30,
  },
});

const PersonalInfo = ({ data }) => {
  const {
    firstName,
    middleInitial,
    lastName,
    address,
    phone,
    email,
    details,
    skills,
  } = data.fields;

  return (
    <View>
      <Text style={styles.name}>
        {capitalizeEach(
          'word',
          `${firstName.value} ${middleInitial.value}${
            middleInitial.value ? '.' : ''
          } ${lastName.value}`
        )}
      </Text>
      <Text>{email.value}</Text>
      <Text>{phone.value}</Text>
      <Text>{address.value}</Text>
      <Text>Details</Text>
      <Text>{capitalizeEach('sentence', details.value)}</Text>
      {/* <Text>Skills</Text>
      <View>
        {skills.value
          .split(',')
          .map(
            (skill) => skill && <Chip label={skill.trim()} variant="outlined" />
          )}
      </View> */}
    </View>
  );
};

export default PersonalInfo;
