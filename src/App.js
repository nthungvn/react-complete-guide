import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

const App = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </Fragment>
  );
};

export default App;
