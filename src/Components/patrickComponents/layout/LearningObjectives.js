import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import images from '../../../images/StudentDashboard/learning objectives.png';
import styles from '../../../styling/LearningObjectives.module.css';
console.log(images);

const LearningObjectives = () => {
  return (
    <MainDashboard>
      <img
        src={images}
        alt="learning Objectives"
        className={styles['LearningObjectives']}
      />
    </MainDashboard>
  );
};

export default LearningObjectives;
