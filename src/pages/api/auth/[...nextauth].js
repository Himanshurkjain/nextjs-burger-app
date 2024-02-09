import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../lib/auth';
import connectToDatabase from '../../../lib/db';


export default NextAuth({
    session: {
      jwt: true,
    },
    baseUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    callbacks: {
      async signOut({ url, baseUrl }) {
        return `${baseUrl}/auth`; // Replace with your actual logout page
      },
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          
          const client = await connectToDatabase();
  
          const usersCollection = client.db('McDonalds').collection('users');
          console.log("coming here", usersCollection);
          const user = await usersCollection.findOne({
            email: credentials.email,
          });
          
  
          if (!user) {
            client.close();
            throw new Error('No user found!');
          }
  
          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );
  
          if (!isValid) {
            client.close();
            throw new Error('Could not log you in!');
          }
  
          client.close();
          return { email: user.email };
          
        },
      }),
    ],
  });
