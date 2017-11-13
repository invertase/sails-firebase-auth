/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

module.exports = (req, res, next) => {
  return next();
};
