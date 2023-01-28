import Link from 'next/link';

import styles from './SimpleList.module.css';

interface SimpleListProps {
  index: number;
  title: string;
  url: string;
}

const SimpleList = ({ index, title, url }: SimpleListProps) => {
  return (
    <Link href={url}>
      <div className={styles.simple_list}>
        <h1 className={styles.simple_list_index}>{index}</h1>
        <p className={styles.simple_list_title}>{title}</p>
      </div>
    </Link>
  );
};

export default SimpleList;
