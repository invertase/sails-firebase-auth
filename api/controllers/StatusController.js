const { version } = require('./../../package.json');

module.exports.index = function find(req, res) {
  const out = { version };
  if (req.user) out.user = req.user;
  return res.ok(out);
};
