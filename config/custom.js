/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {
  firebase: {
    url: 'YOUR URL HERE',
    credential: require('../firebase-service-account.json'),
  }
};
