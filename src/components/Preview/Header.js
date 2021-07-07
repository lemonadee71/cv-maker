import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { BodyText, Divider, Subtitle } from './styled';

const styles = StyleSheet.create({
  nameAndTitle: {
    padding: 10,
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
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

const Header = ({ data }) => {
  const { firstName, lastName, title, phone, email, address } = data;

  return (
    <View>
      <View style={styles.nameAndTitle}>
        <Text style={styles.fullname}>
          <Text style={styles.name}>{firstName}</Text>
          <Text style={[styles.name, { color: 'gray' }]}>{' ' + lastName}</Text>
        </Text>
        {title ? <Subtitle>{title}</Subtitle> : null}
      </View>
      <Divider stroke="3px" color="black" mt={0} mb={0} />
      <View style={styles.contactInfo}>
        {phone ? <BodyText>{phone}</BodyText> : null}
        {email ? <BodyText>{email}</BodyText> : null}
        {address ? <BodyText>{address}</BodyText> : null}
      </View>
      <Divider stroke="1px" mt={0} mb={15} />
    </View>
  );
};

export default Header;
