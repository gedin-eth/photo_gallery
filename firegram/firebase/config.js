// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage';
import {firestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMxwmJwAyRcCJEdZM3v_z4NzLq4FwP1A",
  authDomain: "firegram-52724.firebaseapp.com",
  projectId: "firegram-52724",
  storageBucket: "firegram-52724.appspot.com",
  messagingSenderId: "788852885812",
  appId: "1:788852885812:web:3635900f1dc16815927d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Project Storage
const projectStorage = getStorage(app);

//INITIALIZE FIRESTRORE 
//const projectFirestore = firebase.firestore();

export {projectStorage};//, projectFirestore};