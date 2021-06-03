import { connect } from '../../libs/database';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, address, description, image } = data;
    console.log(title, address, description, image);
    try {
      const client = await connect();
      await client
        .db()
        .collection('meetups')
        .insertOne({ title, address, description, image });
      client.close();
      res.status(201).json({ message: 'Meetup created' });
    } catch (error) {
      req.json(500).json({ message: 'Connect error!' });
    }
  }
};

export default handler;
