/**
 * firebase-auth
 * @description :: Policy that verifies a token header with the firebase admin sdk and attaches the resulting
 * user onto `req.user`. If no token header is present next is called - it does not prevent continuation, use
 * the `authenticated` policy for that.
 */

// TODO possible improvements:
//      - Cache token and user request via Redis to improve request response times.

module.exports = function (req, res, next) {
  const { firebase } = req;
  const { token } = req.headers;

  // 'rough' length validations
  if (token && token.length > 100 && token.length < 2048) {
    return firebase.auth()
      .verifyIdToken(token)
      .then(({ uid }) => {
        return firebase.auth()
          .getUser(uid)
          .then((user) => {
            req._user = user;
            req.user = user.toJSON();
            return next();
          });
      }).catch((error) => {
        req.props = Object.assign(req.props || {}, { auth_error: error.errorInfo });
        return next();
      });
  }

  return next();
};
