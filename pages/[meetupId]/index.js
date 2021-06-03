import { ObjectId } from 'bson';
import MeetupDetail from '../../components/meetups/MeetupDetails';
import { connect } from '../../libs/database';

const MeetupDetailsPage = (props) => {
  return <MeetupDetail {...props.data} />;
};

export const getStaticPaths = async () => {
  const client = await connect();
  const results = await client
    .db()
    .collection('meetups')
    .find({}, { _id: 1 })
    .toArray();
  client.close();
  const paths = results.map((result) => ({
    params: { meetupId: result._id.toString() },
  }));

  return {
    fallback: false,
    paths: paths,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
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
