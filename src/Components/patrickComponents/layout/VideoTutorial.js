import React from 'react';
import MainDashboard from '../../../Pages/MainDashboard';
import images from '../../../images/StudentDashboard/VideoTutorial.png';
console.log(images);
function VideoTutorial() {
  return (
    <MainDashboard>
      <div>
        <img src={images} alt="Video Tutorial" width={1800} />
      </div>
    </MainDashboard>
  );
}

export default VideoTutorial;
