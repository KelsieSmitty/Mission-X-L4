import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../Images/StudentDashboard/makeProject.png';
import styles from '../../../Styling/MakeProject.module.css';
const MakeProject = () => {
  return (
    <MainDashboard>
      <div className={styles['MakeProjectContainer1']}>
        <div className={styles['MakeProjectContainer2']}>
          <img
            src={images}
            alt="makeproject"
            className={styles['MakeProject']}
          />
        </div>
      </div>
    </MainDashboard>
  );
};

export default MakeProject;
