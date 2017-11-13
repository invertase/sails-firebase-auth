const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyBmmUna_PI_2r4YmLw4_DzC8ONaOQiIttY",
  authDomain: "affiliate-f3897.firebaseapp.com",
  databaseURL: "https://affiliate-f3897.firebaseio.com",
  projectId: "affiliate-f3897",
  storageBucket: "affiliate-f3897.appspot.com",
  messagingSenderId: "738776502639"
});

firebase.auth().signInAnonymously().then(()=> {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    console.log(idToken);
    debugger;
    // ...
  }).catch(function(error) {
    console.error(error);
  });
});

