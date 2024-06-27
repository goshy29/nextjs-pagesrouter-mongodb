import { MongoClient } from 'mongodb';

const url = "mongodb+srv://goshy:ns6erApJg73CXHLd@cluster0.mb9mxkm.mongodb.net/ironmuscle?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

let savedDb = null;

async function dbConnection() {
    if (savedDb) {
        return savedDb;
    }

    try {
        await client.connect();
        const db = client.db();
        savedDb = db;
        return db;
    } catch(err) {
        throw new Error("Could not connect to the database.");
    }
}

export { dbConnection };