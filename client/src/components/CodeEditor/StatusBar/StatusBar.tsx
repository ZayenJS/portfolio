import React, { FC } from 'react';
import styles from './StatusBar.module.scss';

interface StatusBarProps {}

const StatusBar: FC<StatusBarProps> = () => {
  return (
    <footer className={styles.StatusBar}>
      <div className={styles.StatusBar__Left}>
        <span className={styles.StatusBar__GitBranch}>master</span>
        <span className={styles.StatusBar__Item}>Git Graph</span>
      </div>
      <div className={styles.StatusBar__Right}>
        <span className={styles.StatusBar__Item}>Ln 14, Col 55</span>
        <span className={styles.StatusBar__Item}>Spaces: 2</span>
        <span className={styles.StatusBar__Item}>UTF-8</span>
        <span className={styles.StatusBar__Item}>Markdown</span>
        <span className={styles.StatusBar__GoLive}>Go Live</span>
        <span className={styles.StatusBar__Prettier}>Prettier: </span>
        <span className={styles.StatusBar__Format}>Formatting: </span>
      </div>
    </footer>
  );
};

export default StatusBar;
