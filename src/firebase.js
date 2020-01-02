import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHDQoJgdBHrxuDSiiBRKIL6M9qX8pWYlI",
    authDomain: "todoapp-7cdcc.firebaseapp.com",
    databaseURL: "https://todoapp-7cdcc.firebaseio.com",
    projectId: "todoapp-7cdcc",
    storageBucket: "todoapp-7cdcc.appspot.com",
    messagingSenderId: "288589635502",
    appId: "1:288589635502:web:83342f31fccef06837f23f",
    measurementId: "G-P192JS6M3Y"
  };

  firebase.initializeApp(firebaseConfig);
  
   export const db = firebase.firestore();

  export default firebase;