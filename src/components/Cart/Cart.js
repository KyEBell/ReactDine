import { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import config from '../../dataBase';

const address = config.databaseAddress;
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cartCntx = useContext(CartContext);

  const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;

  const hasItems = cartCntx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(`${address}/orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCntx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCntx.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order!
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending Order Data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Success!!!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
