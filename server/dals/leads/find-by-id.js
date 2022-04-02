const Model = require('./model');

const findById = (id) => {

    const model = Model.model();

    const query = { _id: id };

    return model.findOne(query);
};

module.exports = findById;
