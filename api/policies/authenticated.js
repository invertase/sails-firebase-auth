/**
 * authenticated
 * @description :: Policy that rejects unauthorized requests.
 */

module.exports = (req, res, next) => {
  if (!req.user) return res.unauthorized();
  return next();
};
