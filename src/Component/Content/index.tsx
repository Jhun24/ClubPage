import { ReactElement } from 'react';
import cn from 'classnames';

import styles from './Content.module.css';

interface ContentProps {
  title: string;
  animation?: string;
  children?: ReactElement;
}

const Content = ({ title, animation = 'fadeIn', children }: ContentProps) => {
  return (
    <div className={cn(styles.content, animation, 'animated')}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Content;
