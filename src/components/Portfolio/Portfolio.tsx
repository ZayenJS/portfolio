import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Desktop from '../Desktop/Desktop';

import styles from './Portfolio.module.scss';

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  return (
    <div className={styles.Portfolio}>
      <Switch>
        <Route path="/suppression">site supprimé</Route>
        <Route path="/" component={Desktop} />
      </Switch>
    </div>
  );
};

export default Portfolio;
