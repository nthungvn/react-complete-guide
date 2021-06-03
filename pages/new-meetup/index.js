import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = (props) => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    console.log(meetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.json());
    router.replace('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
