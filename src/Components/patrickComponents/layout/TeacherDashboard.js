import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import styles from '../../../Styling/TeacherDashboard.module.css';
import images from '../../../Images/StudentDashboard/VideoTutorial.png';
import { useEffect, useState } from 'react';
import TranslatedLanguage2 from '../../../Components/patrickComponents/layout/TeacherDashboardData.json';

const TeacherDashboard = () => {
  const alert7 = () => {
    return alert('completed sucessfully');
  };

  const [language, setLanguage] = useState('english');
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent(TranslatedLanguage2.english);
    } else if (language === 'Maori') {
      setContent(TranslatedLanguage2.Maori);
    }
  });

  return (
    <MainDashboard>
      <div id={styles['Container2']}>
        <h2 id={styles['ProjectSubmission']}>Project Submissions</h2>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option>English</option>
          <option>Maori</option>
        </select>
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
          {content.Description}
          <div id={styles['time3']}>
            <div>{content.Description2}</div>
            <div>10:53 Am</div>
          </div>
        </div>
        <div id={styles['Rawiri1']}>
          <input type="checkbox" id="nav-check"></input>
          {content.Description3}
          <div id={styles['time3']}>
            <div>{content.Description4}</div>
            <div>10:52 Am</div>
          </div>
        </div>
        <div id={styles['Neevah1']}>
          <input type="checkbox" id="nav-check"></input>
          {content.Description5}
          <div id={styles['time3']}>
            <div>{content.Description6}</div>
            <div>10:50 Am</div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};

export default TeacherDashboard;
