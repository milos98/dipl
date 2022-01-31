const Model = require('./model');

const createUser = (params) => {

    const model = Model.model();

    const { email } = params;

    const query = { email: email.toLowerCase() };

    return model.findOne(query);
};

module.exports = createUser;
