import { ReactElement } from 'react';
import cn from 'classnames';

import styles from './Content.module.css';

interface ContentProps {
  children: ReactElement;
  title: string;
  animation?: string;
}

const Content = ({ children, title, animation = 'fadeIn' }: ContentProps) => {
  return (
    <div className={cn(styles.content, animation, 'animated')}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Content;
