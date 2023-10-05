import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);

  const price = `$${meal.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
