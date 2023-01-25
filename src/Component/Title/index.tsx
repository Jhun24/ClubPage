import styles from './Title.module.css';

import { WordMarkLogo } from '~/assets';

const Title = () => {
  return (
    <div className={styles.title_box}>
      <WordMarkLogo />
    </div>
  );
};

export default Title;
