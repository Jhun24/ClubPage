import styles from './Footer.module.css';

import { Copyright } from '~/const';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>@Copyright: {Copyright}</p>
    </div>
  );
};

export default Footer;
