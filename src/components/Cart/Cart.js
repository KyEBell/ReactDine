import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;

  const hasItems = cartCntx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((element) => (
        // <li key={element.id}>{element.name}</li>
        <CartItem
          key={Math.random() * 6}
          name={element.name}
          amount={element.amount}
          price={element.price}
          onRemove={cartItemRemoveHandler.bind(null, element.id)}
          onAdd={cartItemAddHandler.bind(null, element)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <Checkout />
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order!</button>}
      </div>
    </Modal>
  );
};

export default Cart;
