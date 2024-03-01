import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Main.module.scss';
import Filter from '../../components/Filter/Filter';

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Filter />
    </div>
  );
}
