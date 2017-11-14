const firebase = require('firebase');

firebase.initializeApp({
  // TODO paste web sdk credentials here
});

firebase.auth().signInAnonymously().then(() => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
    console.log(idToken);
    debugger;
    // ...
  }).catch(function (error) {
    console.error(error);
  });
});

