import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = (props) => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
