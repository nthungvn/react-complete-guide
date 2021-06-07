import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = (props) => {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    await fetch(
      'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    history.push('/');
  };

  return (
    <Fragment>
      <h1>The New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
