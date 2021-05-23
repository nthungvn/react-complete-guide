import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, error, fetchMeals] = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: 'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
    };
    const responseFn = (data) => {
      const meals = [];
      for (let key in data) {
        meals.push({
          id: key,
          ...data[key],
        });
      }
      setMeals(meals);
    };
    fetchMeals(requestConfig, responseFn);
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <p>Found no meals</p>;

  if (meals.length > 0) {
    content = <ul>{mealsList}</ul>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};
export default AvailableMeals;
