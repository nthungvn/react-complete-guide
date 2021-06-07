import { createContext, useState } from 'react';

const initialState = {
  favorites: [],
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
};

export const FavoritesContext = createContext(initialState);

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setFavorites((prevFavorites) => prevFavorites.concat(meetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return favorites.some((meetup) => meetup.id === meetupId);
  };

  const contextValue = {
    favorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
