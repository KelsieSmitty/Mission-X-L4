import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../Images/StudentDashboard/learning objectives.png';
import styles from '../../../Styling/LearningObjectives.module.css';
console.log(images);

const LearningObjectives = () => {
  return (
    <MainDashboard>
      <div className={styles['LearningObjectivesContainer1']}>
        <div className={styles['LearningObjectivesContainer2']}>
          <img
            src={images}
            alt="learning Objectives"
            className={styles['LearningObjectives']}
          />
        </div>
      </div>
    </MainDashboard>
  );
};

export default LearningObjectives;
