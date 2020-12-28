import React, { FC } from 'react';
import styles from './Readme.module.scss';

interface ReadmeProps {}

const Readme: FC<ReadmeProps> = () => {
  return <div className={styles.Readme}>Readme Component</div>;
};

export default Readme;
