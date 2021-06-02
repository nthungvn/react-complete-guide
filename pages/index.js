import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Learn Next.js together',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/640px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'Munich',
    description: 'A great place that we can share our knowledge',
  },
  {
    id: 'm2',
    title: 'Learn React from ground up',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/640px-Englischer_Garten_M%C3%BCnchen.jpg',
    address: 'Munich',
    description: 'A great place that we can share our knowledge',
  },
];
const MeetUps = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getStaticProps = async () => {
//   // data call here

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 60,
//   };
// };

export const getServerSideProps = (context) => {
  const req = context.req;
  const res = context.res;

  // data call here

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default MeetUps;
