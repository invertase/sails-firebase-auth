process.chdir(__dirname);
require('sails').lift(require('sails/accessible/rc')('sails'));
