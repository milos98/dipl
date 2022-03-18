const Model = require('./model');

const findByEmail = (email) => {

    const model = Model.model();

    const query = { "contact.email": email };

    return model.findOne(query);
};

module.exports = findByEmail;
