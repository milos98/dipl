const Model = require('./model');

const findAll = () => {

    const model = Model.model();

    const query = { };

    return model.findOne(query);
};

module.exports = findAll;
