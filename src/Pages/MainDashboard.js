import React from 'react';
import Footer from '../components/patrickComponents/layout/Footer';

import StudentDashboardSidebar from '../components/patrickComponents/layout/StudentDashboard';

import Navbar2 from '../components/patrickComponents/layout/Navbar2';

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
      <Footer />
    </div>
  );
};

export default MainDashboard;
