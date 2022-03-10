const Model = require('./model');

const findByEmail = (email) => {

    const model = Model.model();

    const query = { email: email.toLowerCase() };

    return model.findOne(query);
};

module.exports = findByEmail;
