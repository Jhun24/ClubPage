import { useState, useEffect } from 'react';

import styles from './ImageViewer.module.css';
import ImageContent from './ImageContent';

import { PHOTO_LIST } from '~/const';

const ImageViewer = () => {
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    setBoxHeight(PHOTO_LIST.length * 130);
  }, []);
  return (
    <div
      className={styles.image_viewer_box}
      style={{
        height: boxHeight,
      }}
    >
      <h2>사진 목록</h2>
      <div className={styles.image_viewer_photo_box}>
        {PHOTO_LIST.map((data) => {
          return <ImageContent imageURL={data} />;
        })}
      </div>
    </div>
  );
};

export default ImageViewer;
