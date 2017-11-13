module.exports = function localize(req, res, next) {
  if (req.headers.language) {
    req.setLocale(req.headers.language);
  }
  next();
};
