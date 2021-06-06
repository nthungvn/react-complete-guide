import { useCallback, useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
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
      });
  };

  const removeIngredientHandler = (ingredientId) => {
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
      });
  };

  const searchHandler = useCallback((searchedIngredients) => {
    setIngredients(searchedIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

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
