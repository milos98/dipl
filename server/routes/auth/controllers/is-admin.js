const AuthFacade = require('../../../facade/auth');

const login = (req, res) => {

    const params = {
        email: req.auth.email
    };

    return AuthFacade.isAdmin(params, res);
};

module.exports = login;