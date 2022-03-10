const AuthFacade = require('../../../facade/auth')
const Validation = require('../../../validation')

const register = (req, res) => {
    const validationResult = Validation.authValidation.registrationValidation.validate(req.body);

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

    return AuthFacade.register(params, res);
};

module.exports = register;