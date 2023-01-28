import { ReactElement } from 'react';

import styles from './LinkPreview.module.css';

interface LinkPreviewProps {
  children: ReactElement;
  url: string;
}

const LinkPreviewNoToolTip = ({ children, url }: LinkPreviewProps) => {
  return (
    <a
      href={encodeURI(url)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link_preview}
    >
      {children}
    </a>
  );
};

export default LinkPreviewNoToolTip;
