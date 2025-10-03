import { MongoClient } from 'mongodb';

/* eslint-disable no-var */
declare global {
	var _mongoClientPromise: Promise<MongoClient> | undefined;
}
/* eslint-enable no-var */

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
	globalThis._mongoClientPromise = clientPromise;
} else {
	clientPromise = globalThis._mongoClientPromise;
}

export default clientPromise;
