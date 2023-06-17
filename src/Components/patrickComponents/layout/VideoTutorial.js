import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/VideoTutorial.png';
console.log(images);
function VideoTutorial() {
  return (
    <MainDashboard>
      <img src={images} alt="Video Tutorial" width={1600} />
    </MainDashboard>
  );
}

export default VideoTutorial;
