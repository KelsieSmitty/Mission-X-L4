import React from 'react';
import Footer from '../Components/patrickComponents/layout/Footer';
import Section from '../Components/patrickComponents/layout/Section';
import StudentDashboardSidebar from '../Components/patrickComponents/layout/StudentDashboard';
import LearningObjectives from '../Components/patrickComponents/layout/LearningObjectives';
import Navbar from '../Components/patrickComponents/layout/Navbar';

const MainDashboard = ({ children }) => {
  return (
    <div>
      <Navbar />
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
