import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rendering Techniques in Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Nav />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rendering Techniques in <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        Presented by:&nbsp;
        <span> Saad, Reham, Mohammad Aldibes, Zain and Ahmed Elsaadawi</span>
      </footer>
    </div>
  );
}
