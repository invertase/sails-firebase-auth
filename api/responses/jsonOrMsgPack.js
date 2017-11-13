const { encode } = require('msgpack-lite');
const { hostname } = require('os');

function asBoolean(value) {
  if (!value) return false;
  if (value === 1) return value;
  if (value === 0) return value;
  if (value === true) return value;

  if (value === '1') return true;
  if (value === '0') return false;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return false;
}

module.exports = function jsonOrMsgPack(response, config = {}) {
  const req = this.req;
  const res = this.res;
  const type = req.get('Content-Type');

  const _response = Object.assign({
    code: config.code || 'OK',
    http_code: res.statusCode,
    src: hostname(),
    message: config.message || 'Operation has successfully executed.',
    payload: response || null,
  }, config.root || {}, req.props || {});

  // add trace info if requested
  if (req.headers.debug || asBoolean(req.param('debug')) || (req.body && req.body.debug)) {
    _response.debug = {
      id: req.id,
      body: req.body,
      route: req.url,
      headers: req.headers,
      params: req.allParams(),
    };
  }

  // send a msgpack response if requested
  if (type === 'application/vnd.msgpack') {
    res.type('application/vnd.msgpack');
    return res.end(encode(_response));
  }

  return res.json(_response);
};
