module.exports.policies = {
  "*": ["isAuthorized"], // Everything resctricted here
  BookController: {
    create: true, // no auth
    getAllBooks: true,
  },
};
