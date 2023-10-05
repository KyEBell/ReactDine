import classes from './AvalableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pizza',
    description: 'Finest Italian Za',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Bratwurst',
    description: 'A German specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Impossible Burger',
    description: 'Not-so meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Green === Healthy',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((element) => {
    return <MealItem key={element.id} meal={element} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
