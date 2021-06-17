import React from 'react';
import PersonalInfo from './PersonalInfo';

const Preview = ({ data }) => {
  return (
    <div className="section">
      <PersonalInfo data={data.personal.groups[0]} />
    </div>
  );
};

export default Preview;
