import React from 'react';
import Footer from '../Components/patrickComponents/layout/Footer';
import Section from '../Components/patrickComponents/layout/Section';
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
      <Footer />
    </div>
  );
};

export default MainDashboard;
