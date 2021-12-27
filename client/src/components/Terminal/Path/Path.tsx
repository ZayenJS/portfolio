import React, { FC } from 'react';

import styles from './Path.module.scss';

interface PathProps {
  owner: string;
  machineName: string;
  path: string;
}

const Path: FC<PathProps> = ({ owner, path, machineName }) => (
  <div className={styles.Container}>
    <div className={styles.Path}>
      <span className={styles.Path__Owner}>{owner}</span> on{' '}
      <span className={styles.Path__MachineName}>{machineName}</span> in{' '}
      <span className={styles.Path__Path}>{path}</span>{' '}
    </div>
  </div>
);

export default Path;
