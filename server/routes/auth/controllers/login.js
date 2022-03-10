const AuthFacade = require('../../../facade/auth')
const Validation = require('../../../validation')

const login = (req, res) => {
    const validationResult = Validation.authValidation.loginValidation.validate(req.body);

    if(validationResult.error) {
        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    const params = {
        email: req.body.email,
        password: req.body.password
    };

    return AuthFacade.login(params, res);
};

module.exports = login;