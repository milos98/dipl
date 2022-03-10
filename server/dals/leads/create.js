const Model = require('./model');

const createLead = (leadObject) => {

    const model = Model.model();

    return model.create(leadObject);
};
module.exports = createLead;
