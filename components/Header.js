import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/ssg">Static-site Generation (SSG)</Link>
      <Link href="/ssr">Server-side Rendering (SSR)</Link>
      <Link href="/csr">Client-side Rendering (CSR)</Link>
      <Link href="/isr">On-demand Incremental Static Generation (ISR)</Link>
      <Link href="/lorem">Lorem</Link>
      <Link href="/without-swr/">Without SWR</Link>
      <Link href="/with-swr/">With SWR</Link>
    </nav>
  );
}

export default Header;
