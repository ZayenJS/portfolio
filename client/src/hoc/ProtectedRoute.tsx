import { FC, ReactNode } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
// import Loading from '../components/Loading/Loading';
import { useAuth } from '../hooks/useAuth';
import { useUserInfos } from '../hooks/useUserInfos';

interface ProtectedRouteProps {
  path: string;
  redirectionRoute: string;
  exact?: boolean;
  isAuth?: boolean;
  render: (props: RouteComponentProps) => ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuth,
  path,
  exact = false,
  redirectionRoute,
  render,
  ...rest
}) => {
  const { user } = useUserInfos();
  const { isLoggedIn } = useAuth();
  const authenticated = isAuth ?? isLoggedIn;

  const isAdminRoute = path.includes('admin');

  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        // if (!hasTriedToAuth) return <Loading />;
        if (authenticated && user.type !== 'ADMIN' && !isAdminRoute) return render(routeProps);
        if (authenticated && user.type === 'ADMIN' && isAdminRoute) return render(routeProps);

        // TODO?: maybe add message on redirect
        return <Redirect to={redirectionRoute} />;
      }}
    />
  );
};

export default ProtectedRoute;
