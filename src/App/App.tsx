import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio/Portfolio';

import styles from './App.module.scss';

interface PortfolioProps {}

const App: FC<PortfolioProps> = () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/suppression">site supprimé</Route>
        <Route path="/" component={Portfolio} />
      </Switch>
    </div>
  );
};

export default App;
