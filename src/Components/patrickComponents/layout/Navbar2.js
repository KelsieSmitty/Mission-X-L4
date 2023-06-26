import React from 'react';
import styles from '../../../Styling/Navbar2.module.css';
import images from '../../../Images/StudentDashboard/NavBar/LevelUpWorks-white.png';
import { useState } from 'react';

const Navbar2 = () => {
  const alert1 = () => {
    return alert('Start Project');
  };

  const [activeDot, setActiveDot] = useState(1);
  const handlelinkClick = (dotNumber) => {
    setActiveDot(dotNumber);
  };

  return (
    <div className={styles['nav']}>
      <div className={styles['nav-header']}>
        <div className={styles['nav-title']}>
          <img
            src={images}
            alt="Instructions"
            width={120}
            height={20}
            className="LevelupworksLogo"
          ></img>
          Project Introduction
          <span className={activeDot === 1 ? styles['dot-1'] : styles['dot']}>
            1
          </span>
          <span className={activeDot === 2 ? styles['dot-1'] : styles['dot']}>
            2
          </span>
          <span className={activeDot === 3 ? styles['dot-1'] : styles['dot']}>
            3
          </span>
          <span className={activeDot === 4 ? styles['dot-1'] : styles['dot']}>
            4
          </span>
        </div>
      </div>

      <div className={styles['nav-links']}>
        <a onClick={alert1}>Start Project</a>
        <a onClick={() => handlelinkClick(2)}>Ask Teacher for help</a>
        <a onClick={() => handlelinkClick(3)}>More Projects</a>
      </div>
    </div>
  );
};

export default Navbar2;
