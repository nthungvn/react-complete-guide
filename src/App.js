import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupPage from './pages/AllMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
