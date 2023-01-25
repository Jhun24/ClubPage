import styles from './SimpleList.module.css';

interface SimpleListProps {
  index: number;
  title: string;
}

const SimpleList = ({ index, title }: SimpleListProps) => {
  return (
    <div className={styles.simple_list}>
      <h1 className={styles.simple_list_index}>{index}</h1>
      <p className={styles.simple_list_title}>{title}</p>
    </div>
  );
};

export default SimpleList;
