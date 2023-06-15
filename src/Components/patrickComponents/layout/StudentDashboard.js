import React, { useState } from 'react';
import styles from '../../../Styling/StudentDashboardSidebar.module.css';
import { NavLink } from 'react-router-dom';

const StudentDashboard = () => {
  const [inActive, setInActive] = useState(false);
  // use to control the sidebar menu
  const toggleSidebar = () => {
    setInActive(!inActive);
  };
  console.log(inActive);

  const sidebarMenu = [
    {
      path: '/studentdashboard/learningobjectives',
      name: 'Learning Objectives',
    },
    {
      path: '/studentdashboard/videotutorial',
      name: 'Video Tutorial',
    },
    {
      path: '/studentdashboard/instructions',
      name: 'Instructions',
    },
    {
      path: '/studentdashboard/makeproject',
      name: 'Make Project',
    },
    {
      path: '/studentdashboard/submitproject',
      name: 'Submit Project',
    },
    {
      path: '/studentdashboard/bonuschallenge',
      name: 'Bonus Challenge',
    },
    {
      path: '/studentdashboard/takethequiz',
      name: 'Take the Quiz',
    },
  ];
  // Conditional Rendering Picture

  return (
    <>
      <div
        className={`${styles.sidebar}  ${
          inActive ? styles.inActive : ''
        }          `}
      >
        <button onClick={toggleSidebar}>Sidebar</button>
        <div>
          {sidebarMenu.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <button>{item.name}</button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;

//{
/* <li>
  <ul>
    <button>Learning Objectives</button>
  </ul>
  <ul>
    <button>Instructions</button>
  </ul>
  <ul>
    <button>Video Tutorial</button>
  </ul>
  <ul>
    <button>Make Project</button>
  </ul>
  <ul>
    <button>Submit Project</button>
  </ul>
  <ul>
    <button>Bonus Challenge</button>
  </ul>
  <ul>
    <button>Take the Quiz</button>
  </ul>
</li> */
//}
