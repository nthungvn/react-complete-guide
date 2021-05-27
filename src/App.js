import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/new-quotes">
            <NewQuote />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
