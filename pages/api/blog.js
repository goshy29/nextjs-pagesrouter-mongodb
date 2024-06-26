import { dbConnection } from "@/db-connection/mongodb-connection";
import { ObjectId } from 'mongodb';

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
    
        try {
            const db = await dbConnection();
            const result = await db.collection("blog").insertOne(data);
            res.status(201).json({ message: "Successfully saved Blog Post!" });
        } catch (error) {
            res.status(500).json({ message: "Saving Blog Post failed." });
        }
    }

    if (req.method === "DELETE") {
        const { placeId } = req.body;

        let place;
        try {
            const db = await dbConnection();
            place = await db.collection("blog").findOne({ _id: new ObjectId(placeId) });

            if (!place) {
                return res.status(404).json({ message: "Blog not found." });
            }

            await db.collection("blog").deleteOne({ _id: new ObjectId(placeId) });

            res.status(200).json({ message: "Successfully deleted Blog." });
        } catch (err) {
            res.status(500).json({ message: "Deleting Blog failed." });
        }
    }
}

export default handler;