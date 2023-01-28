import styles from './SimpleList.module.css';
import SimpleList from './SimpleList';

const SimpleListView = () => {
  return (
    <div className={styles.simple_list_box}>
      <SimpleList index={1} title="공지사항 1" url="/list" />
      <SimpleList index={2} title="공지사항 2" url="/list" />
      <SimpleList index={3} title="공지사항 3" url="/list" />
      <SimpleList index={4} title="공지사항 4" url="/list" />
      <SimpleList index={5} title="공지사항 5" url="/list" />
    </div>
  );
};

export default SimpleListView;
