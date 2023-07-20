import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBaaaJpAFyV9L0kzWEs7lND2pj6PVHfj4c",
  authDomain: "doantotnghiep-e5a71.firebaseapp.com",
  projectId: "doantotnghiep-e5a71",
  storageBucket: "doantotnghiep-e5a71.appspot.com",
  messagingSenderId: "1085689343289",
  appId: "1:1085689343289:web:827fab326d87f74e91cce8",
  measurementId: "G-30MC3QMJZE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const db = getFirestore(app)

