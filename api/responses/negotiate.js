const { get, omit } = require('lodash');

module.exports = function negotiate(error) {
  sails.log.error(error);
  const res = this.res;
  const code = get(error, 'code');
  const message = get(error, 'reason') || get(error, 'message');
  const root = get(error, 'root');
  const data = get(error, 'invalidAttributes') || omit(error, ['name', 'code', 'reason', 'message', 'root', 'status', 'oauthError']);
  const statusCode = get(error, 'status') || get(error, 'oauthError') || 500;
  const config = { code, message, root };

  if (statusCode === 401) return res.unauthorized(data, config);
  if (statusCode === 403) return res.forbidden(data, config);
  if (statusCode === 404) return res.notFound(data, config);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(data, config);

  return res.serverError(data, config);
};
