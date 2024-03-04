import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});
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
export default db;
