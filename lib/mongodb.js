import { MongoClient } from "mongodb";
const uri = "mongodb+srv://55lavkush555:lavkush6269121509@cluster0.tt6dq1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const options = {};
let client;
let clientPromise;

if (!process.env.MONGO_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}
export default clientPromise;
