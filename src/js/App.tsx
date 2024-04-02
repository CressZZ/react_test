import React from 'react';
import styles from '@/scss/App.scss';

export default function App() {
  console.log(styles.locals);
  return (
    <div>
      <h1 className={`${styles.test}`}>Welcome to my app!!</h1>
      <div className={styles.test2}></div>
    </div>
  );
}
