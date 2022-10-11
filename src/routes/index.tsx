import React, { LazyExoticComponent, ReactElement } from 'react';
import {
  Redirect,
  Route as RouteComponent,
  RouteProps,
  Router,
  Switch,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter5Adapter } from 'use-query-params/adapters/react-router-5';
import { Layout } from '@layouts/type';
import { MainLayout } from '@layouts/MainLayout/MainLayout';
import { history } from '@utils/history';
import { Routes } from '@models/route';
import { flattenRoutes } from '@utils/routes';
import { BidsRoutes } from './Bids';

const routes: Routes = flattenRoutes([...BidsRoutes]);

const AppRoute = ({
  component: Component,
  layout: Layout = MainLayout,
  ...rest
}: RouteProps & {
  component: LazyExoticComponent<() => JSX.Element>;
  layout?: Layout;
}): ReactElement => (
  <RouteComponent
    {...rest}
    render={(props) => (
      <Layout>
        <React.Suspense fallback={<div>Loading</div>}>
          <Component {...props} />
        </React.Suspense>
      </Layout>
    )}
  />
);

export const AppRoutes = (): React.ReactElement => {
  return (
    <Router history={history}>
      <QueryParamProvider adapter={ReactRouter5Adapter}>
        <Switch>
          <RouteComponent exact path="/">
            <Redirect to="/bids" />
          </RouteComponent>
          {routes
            .filter((r) => r.component)
            .map((r) => (
              <AppRoute
                exact
                layout={MainLayout}
                component={r.component}
                path={r.path}
                key={r.path}
              />
            ))}
        </Switch>
      </QueryParamProvider>
    </Router>
  );
};
