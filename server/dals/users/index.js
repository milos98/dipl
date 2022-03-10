const Model = require('./model')
const Create = require('./create');
const FindByEmail = require('./find-by-email');
const FindById = require('./find-by-id');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    create: Create,
    findByEmail: FindByEmail,
    findById: FindById
};
