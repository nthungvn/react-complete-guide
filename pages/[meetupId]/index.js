import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  return <MeetupDetail {...props.data} />;
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: 'm1' },
      },
      {
        params: { meetupId: 'm2' },
      },
    ],
  };
};

export const getStaticProps = (context) => {
  const meetupId = context.params;

  return {
    props: {
      data: {
        id: meetupId,
        title: 'Learn Next.js together',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/640px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Munich',
        description: 'A great place that we can share our knowledge',
      },
    },
  };
};

export default MeetupDetailsPage;
