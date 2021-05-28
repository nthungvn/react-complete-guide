import React, { Fragment, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));

function App() {
  const fallback = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <Fragment>
      <MainNavigation />
      <Layout>
        <Suspense fallback={fallback}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route exact path="/quotes">
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
