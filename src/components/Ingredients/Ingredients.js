import { useCallback, useContext, useMemo, useReducer } from 'react';
import { AuthContext } from '../../context/auth-context';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const reducerFn = (state, action) => {
  if (action.type === 'SENDING') {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === 'ADD_INGREDIENT') {
    return {
      ingredients: state.ingredients.concat(action.ingredient),
      isLoading: false,
      error: null,
    };
  }

  if (action.type === 'REMOVE_INGREDIENT') {
    return {
      ingredients: state.ingredients.filter(
        (ingredient) => ingredient.id !== action.ingredientId
      ),
      isLoading: false,
      error: null,
    };
  }

  if (action.type === 'ERROR') {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }

  if (action.type === 'CLEAR_ERROR') {
    return {
      ...state,
      isLoading: false,
      error: null,
    };
  }

  if (action.type === 'SET_INGREDIENTS') {
    return {
      ...state,
      ingredients: action.ingredients,
    };
  }

  return state;
};

function Ingredients() {
  const [{ ingredients, isLoading, error }, dispatch] = useReducer(
    reducerFn,
    initialState
  );
  const authCtx = useContext(AuthContext);

  const addIngredientHandler = (ingredient) => {
    dispatch({ type: 'SENDING' });
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
        dispatch({
          type: 'ADD_INGREDIENT',
          ingredient: { id: data.name, ...ingredient },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR',
          error: error.message || 'Something went wrong',
        });
      });
  };

  const removeIngredientHandler = useCallback((ingredientId) => {
    dispatch({ type: 'SENDING' });
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
      .then((_) => {
        dispatch({
          type: 'REMOVE_INGREDIENT',
          ingredientId: ingredientId,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR',
          error: error.message || 'Something went wrong',
        });
      });
  }, []);

  const searchHandler = useCallback((searchedIngredients) => {
    dispatch({ type: 'SET_INGREDIENTS', ingredients: searchedIngredients });
  }, []);

  const closeModalHandler = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const ingredientList = useMemo(
    () => (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    ),
    [ingredients, removeIngredientHandler]
  );

  return (
    <div className="App">
      {error && <ErrorModal onClose={closeModalHandler}>{error}</ErrorModal>}

      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <h2>Welcome</h2>
        <button onClick={logoutHandler}>Logout</button>
      </div>

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        isLoading={isLoading}
      />

      <section>
        <Search onSearch={searchHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
