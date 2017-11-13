module.exports = function badRequest(data, config = {}) {
  this.res.status(401);
  this.res.jsonOrMsgPack(data, Object.assign({
    code: 'E_UNAUTHORIZED',
    message: this.req.i18n.__('http.unauthorized'),
  }, config));
};
