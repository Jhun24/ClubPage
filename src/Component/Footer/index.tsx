import styles from './Footer.module.css';

import { Copyright } from '~/const';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        @Copyright:
        {Copyright.map((data) => {
          return ` ${data},`;
        })}
      </p>
    </div>
  );
};

export default Footer;
