import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const MeetUps = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/meetups', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const meetups = await response.json();

  return {
    props: {
      meetups: meetups.results,
    },
    revalidate: 60,
  };
};

export default MeetUps;
