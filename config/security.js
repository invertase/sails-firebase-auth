module.exports.security = {
  cors: {
    allRoutes: false,
    allowOrigins: '*',
    allowCredentials: false,
  },


  /****************************************************************************
   * By default, Sails' built-in CSRF protection is disabled to facilitate     *
   * rapid development.  But be warned!  If your Sails app will be accessed by *
   * web browsers, you should _always_ enable CSRF protection before deploying *
   * to production.                                                            *
   ****************************************************************************/
  csrf: false

};
