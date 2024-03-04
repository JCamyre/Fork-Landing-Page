// import * as dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

// dotenv.config();

const app = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});
// const app = initializeApp(creds);
// console.log('process.env: ', process.env);
// console.log(
//   process.env.apiKey,
//   process.env.authDomain,
//   process.env.projectId,
//   process.env.storageBucket,
//   process.env.messagingSenderId,
//   process.env.appId,
//   process.env.measurementId,
// );
const db = getFirestore(app);

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const docRef = await addDoc(collection(db, 'emails'), {
        email,
        createdAt: new Date(),
      });
      console.log('Successfully written to db, ', docRef);
      res.status(200).json({ message: 'Email successfully added! ' });
    } catch (e) {
      console.error('Error adding document: ', e);
      res.status(500).json({ message: 'Error adding document.' });
    }
    res.status(200).json({ message: 'Hello from Next.js!' });
  } else {
    res.status(405).end();
  }
}
