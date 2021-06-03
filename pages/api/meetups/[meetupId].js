import { ObjectId } from 'bson';
import { getDb } from '../../../libs/database';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { meetupId } = req.query;
    const db = await getDb();
    const result = await db
      .collection('meetups')
      .findOne({ _id: ObjectId(meetupId) });
    if (!result) {
      return res.json(404).json({ message: 'Not Found' });
    }
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
