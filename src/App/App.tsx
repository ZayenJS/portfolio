import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio/Portfolio';

interface PortfolioProps {}

const App: FC<PortfolioProps> = () => {
  return (
    <Switch>
      <Route path="/suppression">site supprimé</Route>
      <Route path="/" component={Portfolio} />
    </Switch>
  );
};

export default App;
