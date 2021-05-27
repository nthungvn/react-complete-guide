import { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Layout>
        <Switch>
          <Route path="new-quotes"></Route>
          <Route path="quotes"></Route>
          <Route path="quotes/:quoteId"></Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
