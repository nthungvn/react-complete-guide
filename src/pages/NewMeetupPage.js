import { Fragment } from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = (props) => {
  return (
    <Fragment>
      <h1>The New Meetup Page</h1>
      <NewMeetupForm />
    </Fragment>
  );
};

export default NewMeetupPage;
