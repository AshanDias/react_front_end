// import firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/storage'
// var firebase = require('firebase/app');

 var firebaseConfig = {
    apiKey: "AIzaSyCNPei1EbAYW4kcq1FBXyW8ppbp8sWZ3uQ",
    authDomain: "webapi-433ca.firebaseapp.com",
    projectId: "webapi-433ca",
    storageBucket: "webapi-433ca.appspot.com",
    messagingSenderId: "1056220154262",
    appId: "1:1056220154262:web:af8f02eec86c441abab5b7"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  export  {
    storage, firebase as default
  }