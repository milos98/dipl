const EmployeesFacade = require('../../../facade/employees')
const Validation = require('../../../validation')

const updateEmployee = (req, res) => {
    const params = {
        id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        isSuspended: req.body.isSuspended
    };

    if (req.body.password) {
        params.password = req.body.password
    }

    const validationResult = Validation.employeeValidation.updateValidation.validate(params);

    if (validationResult.error) {
        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    params.user_id = req.auth.user_id;

    return EmployeesFacade.update(params, res);
};

module.exports = updateEmployee;