import React, { useEffect, useState } from 'react';
import { PickerOverlay } from 'filestack-react-18';
import styles from '../../../styling/FileStack.module.css';
import SendPhotoSD from '../../../images/StudentDashboard/sendPhoto.png';

const FileStack = () => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ imageUrl }),
      redirect: 'follow',
    };
    fetch(
      'http://localhost:4000/studentdashboard/submitproject',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, [imageUrl]);

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

      <br></br>
    </div>
  );
};

export default FileStack;
