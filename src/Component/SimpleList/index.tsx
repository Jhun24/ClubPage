import styles from './SimpleList.module.css';
import SimpleList from './SimpleList';

const SimpleListView = () => {
  return (
    <div className={styles.simple_list_box}>
      <SimpleList index={1} title="공지사항 1" url="/post" />
      <SimpleList index={2} title="공지사항 2" url="/post" />
      <SimpleList index={3} title="공지사항 3" url="/post" />
      <SimpleList index={4} title="공지사항 4" url="/post" />
      <SimpleList index={5} title="공지사항 5" url="/post" />
    </div>
  );
};

export default SimpleListView;
