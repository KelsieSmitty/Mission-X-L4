import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import images from '../../../images/StudentDashboard/makeProject.png';
const MakeProject = () => {
  return (
    <MainDashboard>
      <img src={images} alt="makeproject" width={1600} />
    </MainDashboard>
  );
};

export default MakeProject;
