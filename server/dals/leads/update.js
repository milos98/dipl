const Model = require("./model");

const update = (leadObject) => {

    const model = Model.model();
    const leadData = {...leadObject};
    leadData._id = leadObject.id;
    delete leadData.id;

    return model.findOneAndUpdate({_id: leadObject.id}, leadData);
};
module.exports = update;