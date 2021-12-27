import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio/Portfolio';
import ProtectedRoute from '../hoc/ProtectedRoute';
import Admin from '../pages/Admin/Admin';
import Login from '../pages/Public/Login/Login';

interface PortfolioProps {}

const App: FC<PortfolioProps> = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/admin"
        redirectionRoute="/connexion"
        render={(routeProps) => <Admin {...routeProps} />}
      />
      <Route path="/connexion" component={Login} />
      <Route path="/" component={Portfolio} />
    </Switch>
  );
};

export default App;
