import { useCallback, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add ingredient');
        }
        return response.json();
      })
      .then((data) => {
        setIngredients((prevIngredients) =>
          prevIngredients.concat({ id: data.name, ...ingredient })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message || 'Something went wrong');
        setIsLoading(false);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    const url = `https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${ingredientId}.json`;
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add ingredient');
        }
        return response.ok;
      })
      .then((success) => {
        if (success) {
          setIngredients((prevIngredients) =>
            prevIngredients.filter(
              (ingredient) => ingredient.id !== ingredientId
            )
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message || 'Something went wrong');
        setIsLoading(false);
      });
  };

  const searchHandler = useCallback((searchedIngredients) => {
    setIngredients(searchedIngredients);
  }, []);

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div className="App">
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        isLoading={isLoading}
      />

      <section>
        <Search onSearch={searchHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>

      {error && <ErrorModal onClose={closeModalHandler}>{error}</ErrorModal>}
    </div>
  );
}

export default Ingredients;
