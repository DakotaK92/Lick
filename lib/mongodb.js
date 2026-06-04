import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "lick";

let cachedClient;

export async function getMongoClient() {
  if (!uri) {
    return null;
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  cachedClient = await client.connect();

  return cachedClient;
}

export async function getProductsCollection() {
  const client = await getMongoClient();

  if (!client) {
    return null;
  }

  return client.db(dbName).collection("products");
}
