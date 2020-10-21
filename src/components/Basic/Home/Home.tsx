import React, { FC } from 'react';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return <div className={styles.Home}>Home Component</div>;
};

export default Home;
