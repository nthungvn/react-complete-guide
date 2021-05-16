import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Modal = (props) => {
  const visible = props.visible === 'true' ? 'show' : 'hide';

  return (
    <div className={classes[visible]}>
      <div onClick={props.onConfirm} className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
