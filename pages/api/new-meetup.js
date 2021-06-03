import { getDb } from '../../libs/database';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, address, description, image } = data;
    console.log(title, address, description, image);
    try {
      const result = await getDb()
        .collection('meetups')
        .insertOne({ title, address, description, image });

      res
        .status(200)
        .json({ message: 'ok', affectedRow: result.insertedCount });
    } catch (error) {
      req.json(500).json({ message: 'Connect error!' });
    }
  }
};

export default handler;
