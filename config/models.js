module.exports.models = {
  schema: true,
  migrate: 'safe',
  datastore: 'mongo',
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'string', columnName: '_id' },
    //--------------------------------------------------------------------------
    //  /\   Using MongoDB?
    //  ||   Replace `id` above with this instead:
    //
    // ```
    // id: { type: 'string', columnName: '_id' },
    // ```
    // OTHERS:
    //   id: { type: 'number', autoIncrement: true, },
    //--------------------------------------------------------------------------
  },


  /******************************************************************************
   *                                                                             *
   * The set of DEKs (data encryption keys) for at-rest encryption.              *
   * i.e. when encrypting/decrypting data for attributes with `encrypt: true`.   *
   *                                                                             *
   ******************************************************************************/

  dataEncryptionKeys: {
    default: '2uGASrNd56mtFUDmdewsFyzEPoEOTTra68VOo666nxo='
  },

  cascadeOnDestroy: true,
};
