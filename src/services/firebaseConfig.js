/* eslint-disable  */
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// firebase reserva
// const firebaseConfig = {
//   apiKey: "AIzaSyBeGxIBk7SxBHHraB48S6fdl-NvGKnwyp0",
//   authDomain: "avanade-tf-2021.firebaseapp.com",
//   projectId: "avanade-tf-2021",
//   storageBucket: "avanade-tf-2021.appspot.com",
//   messagingSenderId: "102260884887",
//   appId: "1:102260884887:web:b3ce5afd4971c1a45730d2"
// };

// ******** firebase real-oficial *******
const firebaseConfig = {
  apiKey: "AIzaSyB-j5KajPoGLJuIcOn6HdZ6Yv4ptT8u04o",
  authDomain: "teste-jul.firebaseapp.com",
  projectId: "teste-jul",
  storageBucket: "teste-jul.appspot.com",
  messagingSenderId: "491879338504",
  appId: "1:491879338504:web:b506dc4157a15ae63177bd"
};
const start = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
///export const dataStore = firebase.firestore().collection("ada")
////export const firestore =   firebase.firestore();
export const db = start.firestore;

export default storage;
