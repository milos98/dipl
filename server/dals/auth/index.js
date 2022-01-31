const Model = require('./model')
const Create = require('./create');
const FindByEmail = require('./find-by-email');

module.exports = {
    initialize: () => {
        Model.initialize();
    },
    create: Create,
    findByEmail: FindByEmail
};
