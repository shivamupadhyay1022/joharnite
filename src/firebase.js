
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig ={
  apiKey: "AIzaSyBmqa_9jvncUhq24lDNOhz-mtbyFQEJZiM",
  authDomain: "solaris-joharnitefest.firebaseapp.com",
  databaseURL: "https://solaris-joharnitefest-default-rtdb.firebaseio.com",
  projectId: "solaris-joharnitefest",
  storageBucket: "solaris-joharnitefest.appspot.com",
  messagingSenderId: "642206708296",
  appId: "1:642206708296:web:e019a8e5f7b9ae46e31e7d"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

export default app;