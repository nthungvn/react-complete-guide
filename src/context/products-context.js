const { createContext, useState } = require('react');

const initialState = {
  products: [],
  toggleFav: (id) => {},
};

const initialProducts = [
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
];

const ProductsContext = createContext(initialState);

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(initialProducts);

  const toggleFavHandler = (id) => {
    setProducts((prevProducts) => {
      const prodIndex = prevProducts.findIndex((p) => p.id === id);
      const newFavStatus = !prevProducts[prodIndex].isFavorite;
      const updatedProducts = [...prevProducts];
      updatedProducts[prodIndex] = {
        ...prevProducts[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  const contextValue = {
    products,
    toggleFav: toggleFavHandler,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
