import React from 'react';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import PersonalInfo from './PersonalInfo';

const Preview = ({ data }) => {
  return (
    <div className="preview">
      <div className="preview__col-left">
        <PersonalInfo data={data.personal.groups[0]} />
      </div>
      <div className="preview__col-right">
        <EducationSection />
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Preview;
