import firebase  from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAfe8r39f3rIoXeLbxrE9ESj0hQryVsz8A",
   authDomain: "letmeask-5e2b9.firebaseapp.com",
   databaseURL: "https://letmeask-5e2b9-default-rtdb.firebaseio.com",
   projectId: "letmeask-5e2b9",
   storageBucket: "letmeask-5e2b9.appspot.com",
   messagingSenderId: "673497365110",
   appId: "1:673497365110:web:92b24562d424b65c1a7d57",
   measurementId: "G-8SBC0V7V1C"
 };

 firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
 export const database = firebase.database();
 