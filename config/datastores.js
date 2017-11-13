const dbPort = '27017';
const dbHost = 'localhost';
const dbName = 'sails-with-firebase-auth';

// Mac brew service command:
//  brew services start mongo

module.exports.datastores = {
  mongo: {
    adapter: require('sails-mongo'),
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`,
  },
};
