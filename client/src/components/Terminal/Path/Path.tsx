import React, { FC } from 'react';

import classes from './Path.module.scss';

interface PathProps {
  owner: string;
  machineName: string;
  path: string;
}

const Path: FC<PathProps> = ({ owner, path, machineName }) => (
  <div className={classes.Container}>
    <div className={classes.Path}>
      <span className={classes.Path__Owner}>{owner}</span> on{' '}
      <span className={classes.Path__MachineName}>{machineName}</span> in{' '}
      <span className={classes.Path__Path}>{path}</span>{' '}
    </div>
  </div>
);

export default Path;
