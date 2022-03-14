import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export function SSG() {
  return (
    <div className={styles.container}>
      <Nav />
    </div>
  );
}

export default SSG;
