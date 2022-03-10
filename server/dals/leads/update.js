const Model = require('./model');

const updateLead = (leadObject) => {

    const model = Model.model();

    return model.update(leadObject);
};
module.exports = updateLead;
