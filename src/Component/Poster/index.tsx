import styles from './Poster.module.css';

import LinkPreview from 'Component/LinkPreview';

const Poster = () => {
  return (
    <div className={styles.poster_box}>
      <div className={styles.image_box}>
        <LinkPreview url="post.png">
          <img src="post.png" alt="포스터" />
        </LinkPreview>
      </div>

      <h2 className={styles.poster_title}>주의 사항</h2>
      <p className={styles.poster_content}>히히 들어오면 못나감 </p>

      <LinkPreview url="http://form.gle">
        <>
          <h2 className={styles.poster_title}>지원 링크</h2>
          <p className={styles.poster_content}>https://form.gle</p>
        </>
      </LinkPreview>
    </div>
  );
};

export default Poster;
