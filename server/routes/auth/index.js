const AuthRouter = require('express').Router();

const Controllers = require('./controllers');

AuthRouter.post('/register', Controllers.register);
AuthRouter.post('/login', Controllers.login);

module.exports = AuthRouter;
