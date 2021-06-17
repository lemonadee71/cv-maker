import React from 'react';

const PersonalInfo = ({ data }) => {
  const { firstName, lastName, address, phone, email, details, skills } =
    data.fields;

  return (
    <>
      <h3>
        {firstName.value} {lastName.value}
      </h3>
      <p>
        <span>{email.value}</span>
        <span>{phone.value}</span>
        <span>{address.value}</span>
      </p>
      <p>Details</p>
      <p>{details.value}</p>
      <p>Skills</p>
      <p>{skills.value}</p>
    </>
  );
};

export default PersonalInfo;
