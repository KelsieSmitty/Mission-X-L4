import React, { useState } from 'react';
import styles from '../../../Styling/StudentDashboardSidebar.module.css';
import SidebarIcons from '../../../Styling/SidebarIcons.module.css';
import { NavLink } from 'react-router-dom';

import Instructionsicon from '../../../Images/StudentDashboard/instructions.png';
import Videoicon from '../../../Images/StudentDashboard/video.png';
import MakeProjecticon from '../../../Images/StudentDashboard/makeProjectSelected.png';
import SubmitProjecticon from '../../../Images/StudentDashboard/submitProject.png';
import takethequizicon from '../../../Images/StudentDashboard/takeTheQuiz.png';
import projectsubmission from '../../../Images/StudentDashboard/projectSubmissions.png';
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
      path: '/studentdashboard/instructions',
      name: 'Instructions',
      img: Instructionsicon,
    },
    {
      path: '/studentdashboard/videotutorial',
      name: 'Video Tutorial',
      img: Videoicon,
    },

    {
      path: '/studentdashboard/makeproject',
      name: 'Make Project',
      img: MakeProjecticon,
    },
    {
      path: '/studentdashboard/submitproject',
      name: 'Submit Project',
      img: SubmitProjecticon,
    },
    {
      path: '/studentdashboard/takethequiz',
      name: 'Take the Quiz',
      img: takethequizicon,
    },
    {
      path: '/studentdashboard/projectsubmissions',
      name: 'Project Submission',
      img: projectsubmission,
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
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: ' #43c0f6',
            padding: 5,
            margin: 10,
            border: 10,
          }}
        >
          Sidebar
        </button>
        <div>
          {sidebarMenu.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <ul>
                <li>
                  <div className={SidebarIcons['SidebarWords']}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={SidebarIcons['SidebarIcons']}
                    />
                    {item.name}
                  </div>
                </li>
              </ul>

              <br></br>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
