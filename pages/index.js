import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Learn Next.js together',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/640px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    description: 'A great place that we can share our knowledge',
  },
  {
    id: 'm2',
    title: 'Learn React from ground up',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/640px-Englischer_Garten_M%C3%BCnchen.jpg',
    description: 'A great place that we can share our knowledge',
  },
];
const MeetUps = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default MeetUps;
