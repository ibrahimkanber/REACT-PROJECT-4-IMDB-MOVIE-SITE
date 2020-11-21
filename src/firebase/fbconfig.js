import firebase from "firebase";
import "firebase/firestore";
import  "firebase/auth"
var fbconfig = {
    apiKey: "AIzaSyDx6Z_VYoHnOnjdzc3F7JnO5_bennGNQgY",
    authDomain: "movie-project-2271.firebaseapp.com",
    databaseURL: "https://movie-project-2271.firebaseio.com",
    projectId: "movie-project-2271",
    storageBucket: "movie-project-2271.appspot.com",
    messagingSenderId: "42836889599",
    appId: "1:42836889599:web:d7545adb4df98bb73561ca"
  };
  // Initialize Firebase
  firebase.initializeApp(fbconfig);

  let db=firebase.firestore()
  let auth=firebase.auth()

  export {db, auth}