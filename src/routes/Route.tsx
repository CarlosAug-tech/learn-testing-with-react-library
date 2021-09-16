import React from 'react';
import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
} from 'react-router-dom';
import DefaultLayout from '../pages/__layouts__/default';

interface IRouteProps extends DOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate,
  component: Compnent,
  ...rest
}) => {
  const Layout = DefaultLayout;

  return (
    <DOMRoute
      {...rest}
      render={() => (
        <Layout>
          <Compnent />
        </Layout>
      )}
    />
  );
};
export default Route;
