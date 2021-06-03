import { ObjectId } from 'bson';
import { connect } from '../../../libs/database';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { meetupId } = req.query;
    const client = await connect();
    const result = await client
      .db()
      .collection('meetups')
      .findOne({ _id: ObjectId(meetupId) });
    if (!result) {
      return res.json(404).json({ message: 'Not Found' });
    }
    client.close();
    console.log(result);

    return res.json({
      result: {
        id: result._id,
        title: result.title,
        address: result.address,
        image: result.image,
        description: result.description,
      },
    });
  }
  return res.json(404).json({ message: 'Not Found' });
};

export default handler;
