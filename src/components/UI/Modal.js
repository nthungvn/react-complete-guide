import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Card>{props.children}</Card>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>,
    document.getElementById('overlays')
  );
};

export default Modal;
