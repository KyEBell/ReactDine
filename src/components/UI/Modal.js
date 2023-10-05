import classes from './Modal.module.css';
import * as ReactDOM from 'react-dom'; //Backdrop component being rendered in MODAL
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};
//overlay component being rendered in MODAL

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
