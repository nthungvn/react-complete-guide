import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
  const meetup = props.meetup;

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
    </li>
  );
};

export default MeetupItem;
