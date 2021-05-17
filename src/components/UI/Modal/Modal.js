import { Fragment } from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      className={`${classes.backdrop} ${classes[props.visible]}`}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={`${classes.modal} ${classes[props.visible]}`}>
      <header className={classes.header}>
        <h3>{props.title}</h3>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  const visible = props.visible === 'true' ? 'show' : 'hide';

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} visible={visible} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
          visible={visible}
        />,
        document.getElementById('modal-overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
