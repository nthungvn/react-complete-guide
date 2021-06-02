import { MongoClient } from 'mongodb';

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_DB = 'nextjs';

/**
 * @type MongoClient
 */

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, address, description, image } = data;
    console.log(title, address, description, image);
    try {
      let client = await MongoClient.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.oipin.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log('Connected to Mongo');
      const result = await client
        .db()
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
