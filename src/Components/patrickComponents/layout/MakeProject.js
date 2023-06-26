import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../Images/StudentDashboard/makeProject.png';

const MakeProject = () => {
  return (
    <MainDashboard>
      <img src={images} alt="makeproject" width={1790} />
    </MainDashboard>
  );
};

export default MakeProject;
