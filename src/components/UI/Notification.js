import classes from './Notification.module.css';

const Notification = (props) => {
  let className = classes.notification;
  if (props.status === 'error') {
    className = `${classes.notification} ${classes.error}`;
  } else if (props.status === 'success') {
    className = `${classes.notification} ${classes.success}`;
  }
  return (
    <section className={className}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
