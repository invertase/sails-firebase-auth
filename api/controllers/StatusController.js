const { version } = require('./../../package.json');

/**
 *
 * @param req
 * @param res
 * @returns {*}
 */
module.exports.index = function find(req, res) {
  const out = { status: 'ok', version };
  if (req.user) out.user = req.user;
  return res.json(out);
};
