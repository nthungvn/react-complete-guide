import { useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { AuthContext } from '../../context/auth-context';
import useHttp from '../../hooks/use-http';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const baseUrl =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app';
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return state.concat(action.ingredient);
    case REMOVE_INGREDIENT:
      return state.filter(
        (ingredient) => ingredient.id !== action.ingredientId
      );
    case 'SET_INGREDIENTS':
      return action.ingredients;
    default:
      throw new Error('Should not be reached!');
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
  const authCtx = useContext(AuthContext);
  const { sendRequest, data, isLoading, error, extra, identifier } = useHttp();

  useEffect(() => {
    if (error || isLoading) {
      return;
    }
    if (identifier === ADD_INGREDIENT) {
      return dispatch({
        type: ADD_INGREDIENT,
        ingredient: { id: data.name, ...extra },
      });
    }
    if (identifier === REMOVE_INGREDIENT) {
      return dispatch({
        type: REMOVE_INGREDIENT,
        ingredientId: extra,
      });
    }
  }, [data, isLoading, error, extra, identifier]);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      const requestConfig = {
        url: `${baseUrl}/ingredients.jsson`,
        method: 'POST',
        body: ingredient,
        headers: { 'Content-Type': 'application/json' },
        extra: ingredient,
        identifier: ADD_INGREDIENT,
      };
      sendRequest(requestConfig);
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      const requestConfig = {
        url: `${baseUrl}/ingredients/${ingredientId}.json`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        extra: ingredientId,
        identifier: REMOVE_INGREDIENT,
      };
      sendRequest(requestConfig);
    },
    [sendRequest]
  );

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
