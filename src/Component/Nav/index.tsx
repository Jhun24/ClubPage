import styles from './Nav.module.css';

import { ArrowToLeft } from '~/assets';

const Nav = () => {
  return (
    <div className={styles.nav_box}>
      <ArrowToLeft />
      <h2 className={styles.nav_title}>돌아가기</h2>
    </div>
  );
};

export default Nav;
