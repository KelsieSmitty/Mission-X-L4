import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import { ChangeEvent, useState } from 'react';
import styles from '../../../Styling/SubmitProject.module.css';
import UploaderButton from './UploaderButton';
import images from '../../../images/StudentDashboard/makeproject.png';
import images2 from '../../../images/StudentDashboard/SecondaryTeacher.png';
import images3 from '../../../images/StudentDashboard/uploader.png';
console.log(images);
console.log(images2);
console.log(images3);

// this is for API File Upload

const SubmitProject = () => {
  return (
    <MainDashboard>
      <section>
        <div className={styles['flex-box-container-1']}>
          <div className={styles['flex-item-left']}>
            <img src={images} alt="Instructions" width={650} />
            <h2>Submit Project Photo</h2>
            <p>
              After completing your project, take a screenshot of your project
              and upload it here
            </p>

            <UploaderButton></UploaderButton>
          </div>
          <div className={styles['flex-item-right']}>
            <img src={images2} alt="Instructions" width={625} height={350} />
            <h2>Show your teacher</h2>
            <p>
              If your teacher is in the same room as you,click the button below
              to let them know you are done
            </p>
            <img src={images3} alt="Instructions" width={300} height={300} />
          </div>
        </div>
      </section>
    </MainDashboard>
  );
};

export default SubmitProject;
