const Model = require('./model');

const findByAccountManager = (id) => {

    const model = Model.model();

    const query = { accountManager: id };

    return model.findOne(query);
};

module.exports = findByAccountManager;
