import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
        );
        if (!response.ok) {
          throw Error('Something went wrong!');
        }
        const data = await response.json();
        const meals = [];
        for (let key in data) {
          meals.push({
            id: key,
            ...data[key],
          });
        }
        setMeals(meals);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

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
