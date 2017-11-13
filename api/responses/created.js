module.exports = function badRequest(data, config = {}) {
  this.res.status(201);
  this.res.jsonOrMsgPack(data, Object.assign({
    code: 'CREATED',
    message: this.req.i18n.__('http.created'),
  }, config));
};
