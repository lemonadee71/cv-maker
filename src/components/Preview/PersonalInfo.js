import React from 'react';
import Chip from '@material-ui/core/Chip';
import { capitalizeEach } from '../../utils';

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
    <>
      <h3>
        {capitalizeEach(
          'word',
          `${firstName.value} ${middleInitial.value}${
            middleInitial.value ? '.' : ''
          } ${lastName.value}`
        )}
      </h3>
      <p>
        <span>{email.value}</span>
        <span>{phone.value}</span>
        <span>{address.value}</span>
      </p>
      <p>Details</p>
      <p>{capitalizeEach('sentence', details.value)}</p>
      <p>Skills</p>
      <div>
        {skills.value
          .split(',')
          .map(
            (skill) => skill && <Chip label={skill.trim()} variant="outlined" />
          )}
      </div>
    </>
  );
};

export default PersonalInfo;
