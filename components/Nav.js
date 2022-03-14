import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

export function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={currentRoute === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/ssr">
        <a className={currentRoute === "/ssr" ? styles.active : ""}>
          Server-side Rendering (SSR)
        </a>
      </Link>
      <Link href="/csr">
        <a className={currentRoute === "/csr" ? styles.active : ""}>
          Client-side Rendering (CSR)
        </a>
      </Link>
      <Link href="/ssg">
        <a className={currentRoute === "/ssg" ? styles.active : ""}>
          Static-site Generation (SSG)
        </a>
      </Link>
      <Link href="/isr">
        <a className={currentRoute === "/isr" ? styles.active : ""}>
          On-demand Incremental Static Generation (ISR)
        </a>
      </Link>
      <Link href="/lorem">
        <a className={currentRoute === "/lorem" ? styles.active : ""}>Lorem</a>
      </Link>
      <Link href="/without-swr/">
        <a className={currentRoute === "/without-swr" ? styles.active : ""}>
          Normal fetch
        </a>
      </Link>
      <Link href="/with-swr/">
        <a className={currentRoute === "/with-swr" ? styles.active : ""}>
          With SWR
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
