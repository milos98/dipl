const Model = require('./model')
const CreateLead = require('./create');
const FindAll = require('./find-all');
const FindById = require('./find-by-id');
const FindByAccountManager = require('./find-by-account-manager');
const UpdateLead = require('./update');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    createLead: CreateLead,
    findAll: FindAll,
    findById: FindById,
    findByAccountManager: FindByAccountManager,
    updateLead: UpdateLead
};
