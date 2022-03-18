const EmployeesRouter = require('express').Router();

const Controllers = require('./controllers');

EmployeesRouter.post('/', Controllers.create);
EmployeesRouter.patch('/:id', Controllers.update);

module.exports = EmployeesRouter;
