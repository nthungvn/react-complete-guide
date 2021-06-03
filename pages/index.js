import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { connect } from '../libs/database';

const MeetUps = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Join the React meetups with us" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
    revalidate: 15,
  };
};

export default MeetUps;
