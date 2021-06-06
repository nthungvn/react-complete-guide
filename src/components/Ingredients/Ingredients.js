import { useCallback, useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setIngredients((prevIngredients) =>
          prevIngredients.concat({ id: data.name, ...ingredient })
        );
        setIsLoading(false);
      })
      .catch((error) => {
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
      .then((response) => response.ok)
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
        setIsLoading(false);
      });
  };

  const searchHandler = useCallback((searchedIngredients) => {
    setIngredients(searchedIngredients);
  }, []);

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
    </div>
  );
}

export default Ingredients;
