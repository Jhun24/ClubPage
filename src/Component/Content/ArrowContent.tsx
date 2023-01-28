import { ReactElement } from 'react';
import cn from 'classnames';

import styles from './Content.module.css';

import { ArrowToRight } from '~/assets';

interface ContentProps {
  title: string;
  animation?: string;
  children?: ReactElement;
}

const ArrowContent = ({
  title,
  animation = 'fadeIn',
  children,
}: ContentProps) => {
  return (
    <div className={cn(styles.content, animation, 'animated')}>
      <div className={styles.content_flex_header}>
        <h1 className={styles.content_title}>{title}</h1>
        <ArrowToRight />
      </div>
      {children}
    </div>
  );
};

export default ArrowContent;
