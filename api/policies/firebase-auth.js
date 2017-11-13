module.exports = function (req, res, next) {
  const { firebase } = req;
  const { token } = req.headers;

  if (token && token.length > 3 && token.length < 2048) {
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
      }).catch(res.serverError);
  }

  return next();
};
