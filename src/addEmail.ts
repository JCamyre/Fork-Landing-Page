// pages/api/addEmail.ts
// This import is used for type definitions only

import { addDoc, collection } from 'firebase/firestore';
import db from 'firebaseConfig';

async function addEmail(email: string) {
  try {
    const docRef = await addDoc(collection(db, 'emails'), {
      email,
      createdAt: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export default addEmail;
