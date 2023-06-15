import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import styles from '../../../Styling/SubmitProject.module.css';
import images from '../../../images/StudentDashboard/makeproject.png';
console.log(images);
const SubmitProject = () => {
  return (
    <MainDashboard>
      <section>
        <div className={styles['flex-box-container-1']}>
          <div className={styles['flex-item-left']}>
            <h2>Submit Project Photo</h2>
            <p>
              After completing your project, take a screenshot of your project
              and upload it here
            </p>
          </div>
          <div className={styles['flex-item-right']}>
            <h2>Show your teacher</h2>
            <p>
              If your teacher is in the same room as you,click the button below
              to let them know you are done
            </p>
          </div>
        </div>
      </section>
    </MainDashboard>
  );
};

export default SubmitProject;
