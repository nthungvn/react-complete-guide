import { Route, Switch } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
const App = () => {
  return (
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
  );
};

export default App;
