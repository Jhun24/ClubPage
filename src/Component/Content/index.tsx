import { ReactElement } from 'react';
import cn from 'classnames';

import styles from './Content.module.css';

import { ArrowToRight } from '~/assets';

interface ContentProps {
  title: string;
  animation?: string;
  children?: ReactElement;
  useArrow?: boolean;
}

const Content = ({
  title,
  animation = 'fadeIn',
  children,
  useArrow = false,
}: ContentProps) => {
  return (
    <div className={cn(styles.content, animation, 'animated')}>
      {useArrow ? (
        <div className={styles.content_flex_header}>
          <h1 className={styles.content_title}>{title}</h1>
          <ArrowToRight />
        </div>
      ) : (
        <h1 className={styles.content_title}>{title}</h1>
      )}
      {children}
    </div>
  );
};

export default Content;
