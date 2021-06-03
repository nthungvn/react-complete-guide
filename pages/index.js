import MeetupList from '../components/meetups/MeetupList';
import { connect } from '../libs/database';

const MeetUps = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const client = await connect();
  const results = await client.db().collection('meetups').find().toArray();
  const responseData = results.map((result) => ({
    id: result._id.toString(),
    title: result.title,
    address: result.address,
    image: result.image,
  }));

  return {
    props: {
      meetups: responseData,
    },
    revalidate: 60,
  };
};

export default MeetUps;
