import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/makeproject.png';
const MakeProject = () => {
  return (
    <MainDashboard>
      <img src={images} alt="makeproject" width={1300} />
    </MainDashboard>
  );
};

export default MakeProject;
