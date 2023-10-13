import styles from "@/app/not-found.module.scss";

const NotFound = () => (
  <div className={styles.pageContainer}>
    <div>
      <div className={styles.text404}>404</div>
      <div className={styles.textDescription}>Oops!</div>
      <div className={styles.textDescription}>This page does not exist.</div>
    </div>
    <div className={styles.textJob}>Let&apos;s look for a job, huh?</div>
  </div>
);

export default NotFound;
