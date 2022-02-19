import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env['MONGODB_URI'];
console.log("uri", uri);
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  // Error checking in case MongoURI is empty
  throw new Error('Please add MongoURI to .env');
}

if (process.env['NODE_ENV'] === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (hot module replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri);
	clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
console.log('Created Client');

export { clientPromise };
