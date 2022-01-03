import React, { FC } from 'react';
import classes from './StatusBar.module.scss';

interface StatusBarProps {}

const StatusBar: FC<StatusBarProps> = () => {
  const language = 'TypeScript React';
  return (
    <footer className={classes.StatusBar}>
      <div className={classes.StatusBar__Left}>
        <span className={classes.StatusBar__GitBranch}>main</span>
        <span className={classes.StatusBar__Item}>Git Graph</span>
      </div>
      <div className={classes.StatusBar__Right}>
        <span className={classes.StatusBar__Item}>Spaces: 2</span>
        <span className={classes.StatusBar__Item}>UTF-8</span>
        <span className={classes.StatusBar__Item}>{language}</span>
        <span className={classes.StatusBar__GoLive}>Go Live</span>
        <span className={classes.StatusBar__Prettier}>Prettier: </span>
        <span className={classes.StatusBar__Format}>Formatting: </span>
      </div>
    </footer>
  );
};

export default StatusBar;
