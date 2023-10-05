import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const context = useContext(CartContext);
  const numberOfCartItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = context;
  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
