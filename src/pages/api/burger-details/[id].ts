import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId} from 'mongodb';

type Data = {
    burgerData: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const { id } = req.query;
    const client = new MongoClient('mongodb+srv://Burger123:Burger123@cluster0.9rosm3n.mongodb.net/?retryWrites=true&w=majority');
    try {
        await client.connect();
        const collection = client.db("McDonalds").collection('burgers');
        if (req.method === 'GET') {
            const burgerData = await collection.findOne({ _id: new ObjectId(id?.toString())});
            res.status(200).json({ burgerData : burgerData });
        } 
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');  
    }
}
