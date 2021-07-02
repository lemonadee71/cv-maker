import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { BodyText, Subtitle } from './styles';

const styles = StyleSheet.create({
  header: {
    width: '90%',
    marginBottom: 15,
  },
  nameAndTitle: {
    padding: 10,
    borderBottom: '3px solid black',
    textTransform: 'uppercase',
  },
  fullName: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 32,
    color: 'black',
    border: '1px solid red',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

const Header = ({ data }) => {
  const { firstName, lastName, title, phone, email, address } = data;

  return (
    <View style={styles.header}>
      <View style={styles.nameAndTitle}>
        <Text style={styles.fullname}>
          <Text style={styles.name}>{firstName}</Text>
          <Text style={[styles.name, { color: 'gray' }]}>{' ' + lastName}</Text>
        </Text>

        <Subtitle>{title}</Subtitle>
      </View>

      <View style={styles.contactInfo}>
        <BodyText>{phone}</BodyText>
        <BodyText>{email}</BodyText>
        <BodyText>{address}</BodyText>
      </View>
    </View>
  );
};

export default Header;
