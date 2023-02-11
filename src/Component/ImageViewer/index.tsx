import styles from './ImageViewer.module.css';
import ImageContent from './ImageContent';

import { PHOTO_LIST } from '~/const';

const ImageViewer = () => {
  return (
    <div className={styles.image_viewer_box}>
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
