const LeadsRouter = require('express').Router();

const Controllers = require('./controllers');

LeadsRouter.get('/', Controllers.getAll);
LeadsRouter.get('/me', Controllers.getAllUsersLeads);
LeadsRouter.post('/', Controllers.create);
LeadsRouter.patch('/:id', Controllers.update);

module.exports = LeadsRouter;
