import { useEffect, useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [enteredSearchText, setEnteredSearchText] = useState('');

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

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const ingredients = [];

        for (let key in data) {
          const ingredient = data[key];
          ingredients.push({ id: key, ...ingredient });
        }
        setIngredients(ingredients);
      });
  }, []);

  const removeIngredientHandler = (ingredientId) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };

  const searchHandler = (searchText) => {
    setEnteredSearchText(searchText);
  };

  let searchIngredients = [...ingredients];
  if (enteredSearchText) {
    searchIngredients = ingredients.filter((ingredient) =>
      ingredient.title.includes(enteredSearchText)
    );
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onSearch={searchHandler} />
        <IngredientList
          ingredients={searchIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
