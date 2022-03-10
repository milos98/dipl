const Model = require('./model')
const Create = require('./create');
const FindAll = require('./find-all');
const FindById = require('./find-by-id');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    create: Create,
    findAll: FindAll,
    findById: FindById
};
