import React, { FC } from 'react';
import styles from './HireMe.module.scss';

interface HireMeProps {}

const HireMe: FC<HireMeProps> = () => {
  return <div className={styles.HireMe}>HireMe Component</div>;
};

export default HireMe;
