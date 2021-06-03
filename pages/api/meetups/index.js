import { getDb } from '../../../libs/database';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const db = await getDb();
    const results = await db.collection('meetups').find().toArray();
    console.log(results);
    const responseData = results.map((result) => ({
      id: result._id,
      title: result.title,
      address: result.address,
      image: result.image,
      description: result.description,
    }));
    return res.json({ results: responseData });
  }
  return res.status(404).json({ message: 'Not Found' });
};

export default handler;
