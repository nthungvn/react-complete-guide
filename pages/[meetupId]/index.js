import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  const data = {
    id: 'm1',
    title: 'Learn Next.js together',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/640px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'Munich',
    description: 'A great place that we can share our knowledge',
  };

  return <MeetupDetail {...data} />;
};

export default MeetupDetailsPage;
