import React from 'react';
import styles from '@/scss/App.scss';
import img from '@/img/img1.webp';

export default function App() {
  console.log(styles);
  return (
    <div>
      <h1 id={`${styles.h1}`}>Welcome to my app!!</h1>
      <div className={styles.test2}></div>
      <img src={img} alt="" />
    </div>
  );
}
