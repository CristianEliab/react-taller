import firebase from 'firebase/app';
import 'firebase/firestore';
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyDG-wbh6NizSq0aNEDMVgV1QXXHsRV_Uzc",
    authDomain: "todo-9309d.firebaseapp.com",
    databaseURL: "https://todo-9309d.firebaseio.com",
    projectId: "todo-9309d",
    storageBucket: "todo-9309d.appspot.com",
    messagingSenderId: "432185607090"
  };
  firebase.initializeApp(config);

  export default firebase;