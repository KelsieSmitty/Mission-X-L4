import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../Images/StudentDashboard/VideoTutorial.png';
import styles from '../../../Styling/Videotutorial.module.css';

console.log(images);
function VideoTutorial() {
  return (
    <MainDashboard>
      <div className={styles['VideoTutorialContainer1']}>
        <div className={styles['VideoTutorialContainer2']}>
          <img
            src={images}
            alt="Video Tutorial"
            className={styles['VideoTutorial']}
          />
        </div>
      </div>
    </MainDashboard>
  );
}

export default VideoTutorial;
