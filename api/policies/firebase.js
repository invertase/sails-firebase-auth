const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(require('../../firebase-service-account.json')),
  databaseURL: ''
});

module.exports = function (req, res, next) {
  req.firebase = firebase;
  next();
};
