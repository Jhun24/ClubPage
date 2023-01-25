import styles from './SimpleList.module.css';
import SimpleList from './SimpleList';

const SimpleListView = () => {
  return (
    <div className={styles.simple_list_box}>
      <SimpleList index={1} title="공지사항 1" />
      <SimpleList index={2} title="공지사항 2" />
      <SimpleList index={3} title="공지사항 3" />
      <SimpleList index={4} title="공지사항 4" />
      <SimpleList index={5} title="공지사항 5" />
    </div>
  );
};

export default SimpleListView;
