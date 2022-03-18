const Model = require('./model')
const Create = require('./create');
const FindAll = require('./find-all');
const FindById = require('./find-by-id');
const FindByEmail = require('./find-by-email');
const FindByAccountManager = require('./find-by-account-manager');
const Update = require('./update');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    create: Create,
    findAll: FindAll,
    findById: FindById,
    findByEmail: FindByEmail,
    findByAccountManager: FindByAccountManager,
    update: Update
};
