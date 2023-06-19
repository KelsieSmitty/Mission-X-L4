import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import styles from '../../../Styling/SubmitProject.module.css';
import UploaderButton from './UploaderButton';
import { useEffect, useState } from 'react';
import TranslatedLanguage from './DataSubmitProject.json';
import images from '../../../images/StudentDashboard/makeproject.png';
import images2 from '../../../images/StudentDashboard/SecondaryTeacher.png';
import images3 from '../../../images/StudentDashboard/uploader.png';
console.log(images);
console.log(images2);
console.log(images3);

const SubmitProject = () => {
  const alert6 = () => {
    return alert(' Teacher help is on the way');
  };
  //translating a page using json file please see DataSubmit.Project.json file

  const [language, setLanguage] = useState('english');
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent(TranslatedLanguage.english);
    } else if (language === 'Maori') {
      setContent(TranslatedLanguage.Maori);
    }
  });

  return (
    <MainDashboard>
      <section>
        <div className={styles['flex-box-container-1']}>
          <div className={styles['flex-item-left']}>
            <img src={images} alt="Instructions" width={650} />
            <h2>{content.Description3}</h2>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>English</option>
              <option>Maori</option>
            </select>
            <div>
              <p>{content.Description}</p>
            </div>

            <br></br>

            <UploaderButton></UploaderButton>
          </div>
          <div className={styles['flex-item-right']}>
            <img src={images2} alt="Instructions" width={625} height={350} />
            <h2>{content.Description4}</h2>
            <br></br>
            <p>{content.Description2}</p>
            <img
              src={images3}
              alt="Instructions"
              width={300}
              height={300}
              onClick={alert6}
            />
          </div>
        </div>
      </section>
    </MainDashboard>
  );
};

export default SubmitProject;
