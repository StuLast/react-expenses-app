import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  get,
  onValue,
  off, 
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoFT-erWMmwmeLmmUJ382hrYFzQ_WxG7o",
  authDomain: "react-expenses-demo-app-134ea.firebaseapp.com",
  projectId: "react-expenses-demo-app-134ea",
  storageBucket: "react-expenses-demo-app-134ea.appspot.com",
  messagingSenderId: "713249197961",
  appId: "1:713249197961:web:b4376033be919b9a905b58",
  measurementId: "G-4X4554DG03",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase();

export { firebase, database as default}