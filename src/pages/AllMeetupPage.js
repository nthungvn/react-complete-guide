import { Fragment, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupPage = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      const response = await fetch(
        'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
      );
      const rawData = await response.json();
      const meetups = [];
      for (let key in rawData) {
        meetups.push({ id: key, ...rawData[key] });
      }
      return meetups;
    };

    fetchMeetups().then((meetups) => {
      setIsFetching(false);
      setMeetups(meetups);
    });
  }, []);

  let content = <MeetupList meetups={meetups} />;

  if (isFetching) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>The All Meetup Page</h1>
      {content}
    </Fragment>
  );
};

export default AllMeetupPage;
