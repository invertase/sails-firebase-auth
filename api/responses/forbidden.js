module.exports = function badRequest(data, config = {}) {
  this.res.status(403);
  this.res.jsonOrMsgPack(data, Object.assign({
    code: 'E_FORBIDDEN',
    message: this.req.i18n.__('http.forbidden'),
  }, config));
};
