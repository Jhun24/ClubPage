import { ReactNode } from 'react';

import styles from './List.module.css';

interface ListProps {
  children: ReactNode;
  height: number;
  width: number;
  justifyContent?: string;
}

const List = ({
  children,
  height,
  width,
  justifyContent = 'flex-start',
}: ListProps) => {
  return (
    <div
      className={styles.list}
      style={{
        height,
        width,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
};

export default List;
