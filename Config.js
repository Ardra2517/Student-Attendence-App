import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA2heYq_J-UZ8PH0uE5mUaaDFCKzqT73jQ",
    authDomain: "attendence-app-5b18f.firebaseapp.com",
    projectId: "attendence-app-5b18f",
    storageBucket: "attendence-app-5b18f.appspot.com",
    messagingSenderId: "1079038784542",
    appId: "1:1079038784542:web:8887d8f8f2fc562d736a0f"
  };
  // Initialize Firebase
 if(!firebase.apps.length)
  var app=firebase.initializeApp(firebaseConfig);
  
  export default app.database();
