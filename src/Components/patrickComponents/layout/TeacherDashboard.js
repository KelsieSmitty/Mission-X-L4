import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import styles from '../../../Styling/TeacherDashboard.module.css';
import images from '../../../images/StudentDashboard/VideoTutorial.png';

const TeacherDashboard = () => {
  const alert7 = () => {
    return alert('completed sucessfully');
  };
  return (
    <MainDashboard>
      <div id={styles['Container2']}>
        <h2 id={styles['ProjectSubmission']}>Project Submissions</h2>
        <button id={styles['downloadbutton']} onClick={alert7}>
          Mark as complete project
        </button>
        <a
          href={images}
          download="Aiden Project"
          target="_blank"
          rel="noreferrer"
        >
          <button id={styles['downloadbutton']}>Download Files</button>
        </a>
        <div id={styles['Aiden1']}>
          <input type="checkbox" id="nav-check"></input>
          Aiden Submitted his project
          <div id={styles['time3']}>
            <div>Thurs July 2023</div>
            <div>10:53 Am</div>
          </div>
        </div>
        <div id={styles['Rawiri1']}>
          <input type="checkbox" id="nav-check"></input>
          Rawiri wants to show his project
          <div id={styles['time3']}>
            <div> Wed July 2023</div>
            <div>10:52 Am</div>
          </div>
        </div>
        <div id={styles['Neevah1']}>
          <input type="checkbox" id="nav-check"></input>
          Neevah wants to show her project
          <div id={styles['time3']}>
            <div>Tue July 2023</div>
            <div>10:50 Am</div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};

export default TeacherDashboard;
