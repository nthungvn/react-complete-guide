import { ObjectId } from 'bson';
import MeetupDetail from '../../components/meetups/MeetupDetails';
import { connect } from '../../libs/database';

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
  const client = await connect();
  const result = await client
    .db()
    .collection('meetups')
    .findOne({ _id: ObjectId(meetupId) });
  client.close();

  const data = {
    id: result._id.toString(),
    title: result.title,
    address: result.address,
    image: result.image,
    description: result.description,
  };

  return {
    props: {
      data: data,
    },
  };
};

export default MeetupDetailsPage;
