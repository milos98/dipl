const Model = require('./model');

const create = (leadObject) => {

    const model = Model.model();

    return model.create(leadObject);
};
module.exports = create;
