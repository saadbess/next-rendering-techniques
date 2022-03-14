import styles from "../../styles/Swr.module.css";
import Header from "../../components/Header";

export default function With_SWR_PAGE() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <p>With</p>
        </div>
      </main>
    </div>
  );
}
