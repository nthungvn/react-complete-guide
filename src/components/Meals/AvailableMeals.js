import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
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

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
