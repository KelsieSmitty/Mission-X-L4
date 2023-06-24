import React, { useState } from 'react';
import styles from '../../../styling/StudentDashboardSidebar.module.css';
import SidebarIcons from '../../../styling/SidebarIcons.module.css';
import { NavLink } from 'react-router-dom';
import images from '../layout/../../../images/StudentDashboard/learningObjectives.png';
import Instructionsicon from '../../../images/StudentDashboard/instructions.png';
import Videoicon from '../../../images/StudentDashboard/video.png';
import MakeProjecticon from '../../../images/StudentDashboard/makeProjectSelected.png';
import SubmitProjecticon from '../../../images/StudentDashboard/submitProject.png';
import takethequizicon from '../../../images/StudentDashboard/takeTheQuiz.png';
import projectsubmission from '../../../images/StudentDashboard/projectSubmissions.png';
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
      img: images,
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
