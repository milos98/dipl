const Model = require('./model')
const Create = require('./create');
const FindByEmail = require('./find-by-email');
const FindById = require('./find-by-id');
const Update = require('./update');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    create: Create,
    findByEmail: FindByEmail,
    findById: FindById,
    update: Update
};
