module.exports = function badRequest(data, config = {}) {
  this.res.status(500);
  this.res.jsonOrMsgPack(data, Object.assign({
    code: 'E_INTERNAL_SERVER_ERROR',
    message: this.req.i18n.__('http.serverError'),
  }, config));
};
