const Model = require('./model');

const createUser = (params) => {

    const model = Model.model();

    const queryParams = {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        encryptedPassword: params.encryptedPassword,
        isAdmin: params.isAdmin,
        isSuspended: params.isSuspended
    };

    return model.create(queryParams);
};
module.exports = createUser;
