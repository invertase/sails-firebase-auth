module.exports = function badRequest(data, config = {}) {
  this.res.status(400);
  this.res.jsonOrMsgPack(data, Object.assign({
    code: 'E_BAD_REQUEST',
    message: this.req.i18n.__('http.badRequest'),
  }, config));
};
