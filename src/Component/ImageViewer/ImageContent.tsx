import styles from './ImageViewer.module.css';

import LinkPreview from '../LinkPreview';

interface ImageContentProps {
  imageURL: string;
}

const ImageContent = ({ imageURL }: ImageContentProps) => {
  return (
    <LinkPreview url={imageURL}>
      <div className={styles.image_content_box}>
        <img src={imageURL} alt="사진" />
      </div>
    </LinkPreview>
  );
};

export default ImageContent;
