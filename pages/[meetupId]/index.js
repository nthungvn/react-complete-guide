import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  return <MeetupDetail {...props.data} />;
};

// export const getStaticPaths = async () => {
//   const response = await fetch('http://localhost:3000/api/meetups', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();
//   const paths = data.results.map((result) => ({
//     params: { meetupId: result.id },
//   }));

//   return {
//     fallback: false,
//     paths: paths,
//   };
// };

export const getServerSideProps = async (context) => {
  const meetupId = context.query.meetupId;
  const response = await fetch(
    'http://localhost:3000/api/meetups/' + meetupId,
    { headers: { 'Content-Type': 'application/json' } }
  );
  const data = await response.json();

  return {
    props: {
      data: data.result,
    },
  };
};

export default MeetupDetailsPage;
