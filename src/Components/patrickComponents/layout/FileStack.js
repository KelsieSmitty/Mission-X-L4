import React, { useState } from 'react';
import { PickerOverlay } from 'filestack-react-18';
import styles from '../../../Styling/FileStack.module.css';
import SendPhotoSD from '../../../Images/StudentDashboard/sendPhoto.png';
const FileStack = () => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  return (
    <div>
      <button onClick={handleVisible} className={styles['SendPhotoButton']}>
        <div>
          <img
            src={SendPhotoSD}
            className={styles['SendPhotoPic']}
            alt="Send PhotoSD"
          ></img>
        </div>
        <p>Send Photo</p>
      </button>

      <div>
        {isPickerOverlayVisible && (
          <PickerOverlay
            apikey="AMx7FqTLBSFGDhnD2taRTz"
            onSuccess={(result) => {
              setImageUrl(result.filesUploaded[0].url);
              setIsPickerOverlayVisible(false);
            }}
          />
        )}
      </div>
      {/* you need to store this url to your database */}
      <br></br>
      <a href={imageUrl}>Verify</a>
    </div>
  );
};

export default FileStack;
