import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { NormalText, Divider, StyledText, Subtitle, Wrapper } from './styled';

const styles = StyleSheet.create({
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
      <Wrapper padding={10} textTransform="uppercase">
        <StyledText {...styles.fullname}>
          <StyledText {...styles.name}>{firstName}</StyledText>
          <StyledText {...styles.name} color="gray">
            {' ' + lastName}
          </StyledText>
        </StyledText>
        {title ? <Subtitle>{title}</Subtitle> : null}
      </Wrapper>
      <Divider stroke="3px" color="black" mt={0} mb={0} />
      <Wrapper {...styles.contactInfo}>
        {phone ? <NormalText>{phone}</NormalText> : null}
        {email ? <NormalText>{email}</NormalText> : null}
        {address ? <NormalText>{address}</NormalText> : null}
      </Wrapper>
      <Divider stroke="1px" mt={0} mb={15} />
    </View>
  );
};

export default Header;
