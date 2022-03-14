import styles from "../../styles/Swr.module.css";
import Header from "../../components/Header";

export default function IndexPage(){
    return(<div className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <div className={styles.content}>
            <p>Without</p>
          </div>
        </main>
      </div>);
};