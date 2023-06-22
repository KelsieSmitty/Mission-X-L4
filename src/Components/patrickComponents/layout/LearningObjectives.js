import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import images from '../../../images/StudentDashboard/learning objectives.png';
console.log(images);

const LearningObjectives = () => {
  return (
    <MainDashboard>
      <img src={images} alt="learning Objectives" width={1600} />
    </MainDashboard>
  );
};

export default LearningObjectives;
