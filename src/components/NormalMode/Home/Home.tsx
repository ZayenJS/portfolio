import React, { FC, useEffect } from 'react';
import { baseTitle } from '../../../utils';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  useEffect(() => {
    document.title = `${baseTitle} - Accueil`;
  }, []);

  return <div className={styles.Home}>Home Component</div>;
};

export default Home;
