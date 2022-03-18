const AuthValidation = require('./auth');
const EmployeeValidation = require('./employee');
const LeadsValidation = require('./leads')

module.exports = {
    authValidation: AuthValidation,
    employeeValidation: EmployeeValidation,
    leadsValidation: LeadsValidation
};
