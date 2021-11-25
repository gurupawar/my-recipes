import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2OmbR_IZ55tcEDJ0KyqdzURai-Mu7fvU",
  authDomain: "react-receipe-d46b0.firebaseapp.com",
  projectId: "react-receipe-d46b0",
  storageBucket: "react-receipe-d46b0.appspot.com",
  messagingSenderId: "34016733131",
  appId: "1:34016733131:web:77da5a5dcbc9f4910af84e",
};

// init firebase

firebase.initializeApp(firebaseConfig);
const ProjectFirestore = firebase.firestore();

export { ProjectFirestore };
