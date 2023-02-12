import { useRouter } from 'next/router';

import styles from './Nav.module.css';

import { ArrowToLeft } from '~/assets';

const Nav = () => {
  const router = useRouter();

  const changeHistoryBack = () => {
    router.back();
  };

  return (
    <div className={styles.nav_box}>
      <ArrowToLeft onClick={changeHistoryBack} />
      <h2
        role="presentation"
        className={styles.nav_title}
        onClick={changeHistoryBack}
      >
        돌아가기
      </h2>
    </div>
  );
};

export default Nav;
