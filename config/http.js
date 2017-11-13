/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */

const { decode } = require('msgpack-lite');
const cuid = require('cuid');

module.exports = {
  ssl: {
    cert: false,
    key: false,
  },

  http: {
    middleware: {
      /**
       * Middleware for setting Connection: keep-alive to all responses
       */
      keepAlive: (req, res, next) => {
        res.set('Connection', 'keep-alive');
        next();
      },

      /**
       * Each request gets it's own unique id
       */
      requestId(req, res, next) {
        req.id = cuid();
        next();
      },

      /**
       * Middleware to decode msgpack format
       */
      decodeMsgPack(req, res, next) {
        const type = req.get('Content-Type');
        if (type === 'application/vnd.msgpack' && req.body && Buffer.isBuffer(req.body)) {
          req.body = decode(req.body);
        }
        next();
      },


      order: [
        'compress',
        'keepAlive',
        'requestId',
        'decodeMsgPack',
        'bodyParser',
        '$custom',
        'router',
      ],

    },
  },
};
