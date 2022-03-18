const Model = require('./model');

const update = (leadObject) => {

    const model = Model.model();

    return model.update(leadObject);
};
module.exports = update;
