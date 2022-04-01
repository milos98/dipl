const AuthRouter = require('express').Router();
const AuthMiddleware = require('../../middleware/auth');
const Controllers = require('./controllers');

AuthRouter.get('/admin', AuthMiddleware, Controllers.isAdmin);
AuthRouter.post('/login', Controllers.login);

module.exports = AuthRouter;
