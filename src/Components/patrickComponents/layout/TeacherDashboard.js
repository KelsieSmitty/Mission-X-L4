import React, { useState } from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import styles from '../../../Styling/TeacherDashboard.module.css';
import images from '../../../images/StudentDashboard/VideoTutorial.png';
import { useEffect } from 'react';
import TranslatedLanguage2 from '../../../components/patrickComponents/layout/TeacherDashboardData.json';

const TeacherDashboard = () => {
  const [checked, setChecked] = useState(false);
  // declaring variable for translation
  const [language, setLanguage] = useState('english');
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent(TranslatedLanguage2.english);
    } else if (language === 'Maori') {
      setContent(TranslatedLanguage2.Maori);
    }
  }, [language]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleMarkAsComplete = () => {
    if (checked) {
      // Perform additional actions here
      setChecked(false); // Reset the checkbox to unchecked state
    } else {
      alert('Please tick the checkbox before marking as complete.');
    }
  };

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
        <button id={styles['downloadbutton']} onClick={handleMarkAsComplete}>
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
        {checked ? null : (
          <div id={styles['Aiden1']}>
            <input
              type="checkbox"
              id="nav-check"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {content.Description}
            <div id={styles['time3']}>
              <div>{content.Description2}</div>
              <div>10:53 AM</div>
            </div>
          </div>
        )}
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
