import connectoDatabase from "@/lib/db";
const { ObjectId } = require('mongodb');

export default async function getBurgersData() {
    const client = await connectoDatabase();
    const collection = client.db().collection('burgers');
    const cursor = collection.find();
    const result = await cursor.toArray();
    client.close();
    return result.map((item) => {
        return {
          id: item['_id'].toString(),
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          calorie: item.calorie,
          slug: item.slug
        }
      })
}


export async function getBurgerDetails(id: string) {
    const client = await connectoDatabase();
    const collection = client.db().collection('burgers');
    try {
        const burgerData = await collection.findOne({ _id: new ObjectId(id?.toString())});
        console.log(burgerData);
        return {
            ...burgerData,
            _id: burgerData && burgerData['_id'].toString(),
            id: burgerData && burgerData['_id'].toString()
        };
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');  
    }
}


export async function getUsers() {
    const client = await connectoDatabase();
    const collection = client.db().collection('users');
    const cursor = collection.find();
    const result = await cursor.toArray();
    client.close();
    return result.map((item) => {
        return {
          id: item['_id'].toString(),
          email: item.email
        }
      })
}


export async function deleteUser(id: string) {
    const client = await connectoDatabase();
    const collection = client.db().collection('users');
    try {
        const result = await collection.deleteOne({ _id: new ObjectId(id?.toString())});
        if (result.deletedCount === 1) {
            console.log('Document deleted successfully');
        } else {
        console.log('Document not found or not deleted');
        }
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');  
    }
}
