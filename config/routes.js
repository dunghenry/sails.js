module.exports.routes = {
  "GET /": "HomeController/index",
  "POST /books/create": "BookController/create",
  "GET /books": "BookController/getAllBooks",
  "GET /books/:id": "BookController/getBook",
  "PUT /books/:id": "BookController/updateBook",
  "DELETE /books/:id": "BookController/deleteBook",
  "POST /auth/register": "UserController/register",
  "POST /auth/login": "UserController/login",
};
