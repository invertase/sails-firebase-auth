module.exports = function notFound(data, config = {}) {
  this.res.status(404);
  return this.res.jsonOrMsgPack(data, Object.assign({
    code: 'E_NOT_FOUND',
    message: this.req.i18n.__('http.notFound'),
  }, config));
};
