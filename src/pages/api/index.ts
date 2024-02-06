import type { NextApiRequest, NextApiResponse } from "next";
import connectoDatabase from "@/lib/db";

type Data = {
  products: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    const client = await connectoDatabase();
    const collection = client.db("McDonalds").collection('burgers');
    const cursor = collection.find();
    const result = await cursor.toArray();
    const burgers = result.map(item => {
        return {
            ...item,
            id: item['_id']
        }
    })
    client.close();
    if (req.method === 'GET') {
        res.status(200).json({ products: burgers });
    }
}


// const documents = [
    //     {
    //         "name": "Fries with Ketchup",
    //         "price": 699,
    //         "image": "https://images.unsplash.com/photo-1550259114-ad7188f0a967",
    //         "description": "Crispy golden fries served with a side of our signature tangy ketchup.",
    //         "calorie": 920,
    //         "slug": "fries"
    //     },
    //     {
    //         "name": "Bacon & Egg",
    //         "price": 799,
    //         "image": "https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6",
    //         "description": "A hearty burger featuring a fried egg, crispy bacon, and melted cheese, all on a toasted brioche bun.",
    //         "calorie": 920,
    //         "slug": "bacon-egg"
    //     },
    //     {
    //         "name": "Mushroom",
    //         "price": 799,
    //         "image": "https://images.unsplash.com/photo-1549611016-3a70d82b5040",
    //         "description": "Loaded with sautéed mushrooms and Swiss cheese, this burger is a mushroom lover's delight.",
    //         "calorie": 820,
    //         "slug": "mushroom-burger"
    //     },
    //     {
    //         "name": "Chicken Sandwich",
    //         "price": 799,
    //         "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    //         "description": "A juicy grilled chicken breast topped with lettuce, tomato, and mayo, served on a whole wheat bun.",
    //         "calorie": 1020,
    //         "slug": "chicken-burger"
    //     }
    //   ];
    //   const resultMany = await collection.insertMany(documents);
    //   console.log(`Inserted ${resultMany.insertedCount} documents`);


