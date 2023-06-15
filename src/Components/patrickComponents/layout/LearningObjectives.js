import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/learning objectives.png';
console.log(images);

const LearningObjectives = () => {
  return (
    <MainDashboard>
      <img src={images} alt="learning Objectives" />
    </MainDashboard>
  );
};

export default LearningObjectives;
