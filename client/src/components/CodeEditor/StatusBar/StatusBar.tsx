import React, { FC } from 'react';
import styles from './StatusBar.module.scss';

interface StatusBarProps {}

const StatusBar: FC<StatusBarProps> = () => {
  const language = 'TypeScript React';
  return (
    <footer className={styles.StatusBar}>
      <div className={styles.StatusBar__Left}>
        <span className={styles.StatusBar__GitBranch}>main</span>
        <span className={styles.StatusBar__Item}>Git Graph</span>
      </div>
      <div className={styles.StatusBar__Right}>
        <span className={styles.StatusBar__Item}>Spaces: 2</span>
        <span className={styles.StatusBar__Item}>UTF-8</span>
        <span className={styles.StatusBar__Item}>{language}</span>
        <span className={styles.StatusBar__GoLive}>Go Live</span>
        <span className={styles.StatusBar__Prettier}>Prettier: </span>
        <span className={styles.StatusBar__Format}>Formatting: </span>
      </div>
    </footer>
  );
};

export default StatusBar;
