import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const cartArray = [{ id: 'c1', name: 'Pizza', amount: 2, price: 22.99 }];

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartArray.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$666</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order!</button>
      </div>
    </Modal>
  );
};

export default Cart;
