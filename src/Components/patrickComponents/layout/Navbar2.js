import React from 'react';
import styles from '../../../styling/Navbar2.module.css';
import images from '../../../images/StudentDashboard/NavBar/LevelUpWorks-white.png';

console.log(styles);

const Navbar2 = () => {
  const alert1 = () => {
    return alert('Start Project');
  };
  const alert2 = () => {
    return alert('Ask Teacher for help');
  };
  const alert3 = () => {
    return alert('More Projects');
  };

  return (
    <div className={styles['nav']}>
      <div className={styles['nav-header']}>
        <div className={styles['nav-title']}>
          <img
            src={images}
            alt="Instructions"
            width={70}
            height={20}
            className="LevelupworksLogo"
          ></img>
          Project Introduction
          <span className={styles['dot-1']}>1</span>
          <span className={styles['dot']}>2</span>
          <span className={styles['dot']}>3</span>
          <span className={styles['dot']}>4</span>
        </div>
      </div>

      <div className={styles['nav-links']}>
        <a onClick={alert1}>Start Project</a>
        <a onClick={alert2}>Ask Teacher for help</a>
        <a a onClick={alert3}>
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
