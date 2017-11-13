module.exports = function ok(data, config = {}) {
  this.res.status(200);
  this.res.jsonOrMsgPack(data, config);
};
