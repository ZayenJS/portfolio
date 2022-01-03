import React, { FC } from 'react';
import classes from './Readme.module.scss';

interface ReadmeProps {}

const Readme: FC<ReadmeProps> = () => {
  return <div className={classes.Readme}>Readme Component</div>;
};

export default Readme;
