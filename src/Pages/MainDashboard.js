import React from 'react';

import StudentDashboardSidebar from '../Components/patrickComponents/layout/StudentDashboard';
import LearningObjectives from '../Components/patrickComponents/layout/LearningObjectives';
import Navbar2 from '../Components/patrickComponents/layout/Navbar2';

const MainDashboard = ({ children }) => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StudentDashboardSidebar />
        <main>{children}</main>
        {/* <LearningObjectives /> */}
      </div>
      {/* <Section /> */}
    </div>
  );
};

export default MainDashboard;
