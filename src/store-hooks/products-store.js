import { initStore } from './store';

export const configureProductsStore = () => {
  const actions = {
    TOGGLE_FAV: (prevState, id) => {
      const prodIndex = prevState.products.findIndex((p) => p.id === id);
      const newFavStatus = !prevState.products[prodIndex].isFavorite;
      const updatedProducts = [...prevState.products];
      updatedProducts[prodIndex] = {
        ...prevState.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return { updatedProducts };
    },
  };

  const initialState = {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false,
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false,
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false,
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false,
      },
    ],
  };

  initStore(actions, initialState);
};
