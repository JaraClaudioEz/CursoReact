import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC--HWcBWsg7FLnaT7cFkaJUo5yitAaK4w",
  authDomain: "pruebafirestore-e7a7d.firebaseapp.com",
  projectId: "pruebafirestore-e7a7d",
  storageBucket: "pruebafirestore-e7a7d.appspot.com",
  messagingSenderId: "328803134594",
  appId: "1:328803134594:web:753271fd8633760021589b",
  measurementId: "G-DFLL693TF6"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore() //Más común se lo llama db o fireDB

export { store }