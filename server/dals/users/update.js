const Model = require('./model');

const updateUser = (params) => {

    const model = Model.model();

    const queryParams = {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        isAdmin: params.isAdmin,
        isSuspended: params.isSuspended,
        encryptedPassword: params.encryptedPassword
    };

    return model.updateOne({_id: params.id}, queryParams);
};
module.exports = updateUser;
