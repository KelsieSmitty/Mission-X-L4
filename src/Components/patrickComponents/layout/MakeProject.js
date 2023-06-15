import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/makeproject.png';
const MakeProject = () => {
  return (
    <MainDashboard>
      <img src={images} alt="Instructions" />
    </MainDashboard>
  );
};

export default MakeProject;
