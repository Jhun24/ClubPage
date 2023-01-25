import { ReactElement } from 'react';
import { Tooltip } from '@varld/popover';

import styles from './LinkPreview.module.css';

interface LinkPreviewProps {
  children: ReactElement;
  url: string;
}

const LinkPreview = ({ children, url }: LinkPreviewProps) => {
  return (
    <Tooltip content={url}>
      <a
        href={encodeURI(url)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link_preview}
      >
        {children}
      </a>
    </Tooltip>
  );
};

export default LinkPreview;
