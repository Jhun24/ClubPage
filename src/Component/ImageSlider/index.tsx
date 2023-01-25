import SimpleImageSlider from 'react-simple-image-slider';

import styles from './ImageSlider.module.css';

import { ArrowToRight } from '~/assets';

const URL = [
  { url: 'dummy1.jpg' },
  { url: 'dummy2.jpg' },
  { url: 'dummy3.jpg' },
];

const ImageSlider = () => {
  return (
    <>
      <div className={styles.image_slider_box}>
        <SimpleImageSlider
          width={900}
          height={500}
          images={URL}
          showBullets
          showNavs
        />
      </div>
      <div className={styles.image_slider_is_mobile}>
        <ArrowToRight />
        <h2>사진 확인하기</h2>
      </div>
    </>
  );
};

export default ImageSlider;
