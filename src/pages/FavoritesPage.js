import { Fragment, useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { FavoritesContext } from '../store/favorites-context';

const FavoritesPage = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const meetups = favoritesCtx.favorites;
  let content = <p>There is not favorites meetups yet</p>;
  if (meetups.length > 0) {
    content = <MeetupList meetups={meetups} />;
  }

  return (
    <Fragment>
      <h1>The Favorites Page</h1>
      {content}
    </Fragment>
  );
};

export default FavoritesPage;
