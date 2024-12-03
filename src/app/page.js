'use client';

import styles from "./page.module.css";
import Products from './products';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Products/>
      </main>
    </div>
  );
}
