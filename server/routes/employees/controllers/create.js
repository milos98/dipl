const EmployeesFacade = require('../../../facade/employees')
const Validation = require('../../../validation')

const create = (req, res) => {
    const validationResult = Validation.employeeValidation.createValidation.validate(req.body);

    if(validationResult.error) {
        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    const params = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        isSuspended: req.body.isSuspended
    };

    return EmployeesFacade.create(params, res);
};

module.exports = create;