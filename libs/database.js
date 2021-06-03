import { MongoClient } from 'mongodb';

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_DB = 'nextjs';

/**
 *
 * @returns {Promise<MongoClient>}
 */
export const connect = async () => {
  try {
    let client = await MongoClient.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.oipin.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to Mongo');
    return client;
  } catch (error) {
    const message = 'Cannot connect to Mongo';
    console.log(message);
    throw new Error(message);
  }
};
