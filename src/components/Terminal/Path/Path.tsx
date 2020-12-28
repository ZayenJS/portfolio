import React, { FC } from 'react';

import styles from './Path.module.scss';

interface PathProps {
  owner: string;
  machineName: string;
  path: string;
  date: string;
}

const Path: FC<PathProps> = ({ date, owner, path, machineName }) => {
  return (
    <div className={styles.Path}>
      <span className={styles.Path__Owner}>{owner}</span> at{' '}
      <span className={styles.Path__MachineName}>{machineName}</span> in{' '}
      <span className={styles.Path__Path}>{path}</span>{' '}
      <span className={styles.Path__Date}>{date} </span>
    </div>
  );
};

export default Path;
