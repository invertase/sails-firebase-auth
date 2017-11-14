/**
 * firebase
 * @description :: Policy that attaches the firebase admin sdk onto `req.firebase`
 */

const firebase = require('firebase-admin');
const config = require('./../../config/custom').custom.firebase;

firebase.initializeApp({
  credential: firebase.credential.cert(config.credential),
  databaseURL: config.url,
});

module.exports = function (req, res, next) {
  req.firebase = firebase;
  next();
};
