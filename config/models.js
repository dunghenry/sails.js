module.exports.models = {
  // schema: true,

  // migrate: 'alter',

  attributes: {
    createdAt: { type: "number", autoCreatedAt: true },
    updatedAt: { type: "number", autoUpdatedAt: true },

    // id: { type: "number", autoIncrement: true },

    //--------------------------------------------------------------------------
    //  /\   Using MongoDB?
    //  ||   Replace `id` above with this instead:
    //
    // ```
    id: { type: "string", columnName: "_id" },
    // ```
    //
    // Plus, don't forget to configure MongoDB as your default datastore:
    // https://sailsjs.com/docs/tutorials/using-mongo-db
    //--------------------------------------------------------------------------
  },

  dataEncryptionKeys: {
    default: "bTafi5iT7Hd/5TQ0Gk9h1x/H6bnaC+X6HyyR/3aJ07U=",
  },

  cascadeOnDestroy: true,
};
