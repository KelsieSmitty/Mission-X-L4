import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../Images/StudentDashboard/Instructionsfrontend.png';
console.log(images);
const Instructions = () => {
  return (
    <MainDashboard>
      <img src={images} alt="Instructions" width={1600} />
    </MainDashboard>
  );
};

export default Instructions;
