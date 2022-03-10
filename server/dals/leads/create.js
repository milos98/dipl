const Model = require('./model');

const createUser = (leadObject) => {

    const model = Model.model();

    return model.create(leadObject);
};
module.exports = createUser;
