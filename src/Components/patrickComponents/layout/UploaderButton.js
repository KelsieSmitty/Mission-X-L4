import React from 'react';
import styles from '../../../Styling/UploaderButton.module.css';
import images from '../../../images/StudentDashboard/uploader.png';

console.log(images);
function UploaderButton() {
  return (
    <div>
      <form action="">
        <input type="file" accept="image/*" name="" id="" />
      </form>
    </div>
  );
}

export default UploaderButton;
