import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = (props) => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
    fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
