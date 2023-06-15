import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/Instructionsfrontend.png';
console.log(images);
const Instructions = () => {
  return (
    <MainDashboard>
      <img src={images} alt="Instructions" />
    </MainDashboard>
  );
};

export default Instructions;
