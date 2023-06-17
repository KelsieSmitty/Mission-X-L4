import React from 'react';
import styles from '../../../Styling/Navbar2.module.css';
import images from '../../../images/StudentDashboard/NavBar/LevelUpWorks-white.png';
console.log(styles);
const Navbar2 = () => {
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
        <a href="" target="_blank">
          Start Project
        </a>
        <a href="" target="_blank">
          Ask Teacher for help
        </a>
        <a href="" target="_blank">
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
