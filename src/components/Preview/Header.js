import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { globalStyles } from './styles';

const styles = StyleSheet.create({
  header: {
    width: '90%',
    border: '1px solid blue',
    marginBottom: 15,
  },
  fullname: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 25,
    borderBottom: '3px solid black',
    fontSize: 32,
    textTransform: 'uppercase',
  },
  firstName: {
    color: 'black',
    marginRight: 5,
  },
  lastName: {
    color: 'gray',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

const Header = ({ data }) => {
  // const {firstName, lastName, phone, email, address } = data

  return (
    <View style={styles.header}>
      <View style={styles.fullname}>
        <Text style={styles.firstName}>FIRST</Text>
        <Text style={styles.lastName}>LAST</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={globalStyles.bodyText}>968-666-8968</Text>
        <Text style={globalStyles.bodyText}>user@example.com</Text>
        <Text style={globalStyles.bodyText}>Made Up Place, CA 94080</Text>
      </View>
    </View>
  );
};

export default Header;
