import { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Layout>
        <Switch>
          <Route path="/new-quotes">
            <NewQuote />
          </Route>
          <Route path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId"></Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
