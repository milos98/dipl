const { entities } = require('../../../constants');
const UsersSchema = require('../schemas');
const Database = require('../../database');

const internals = {};
let model;

internals.initialize = () => {

    model = Database.createCollection(entities.LEADS, UsersSchema);
};

internals.model = () => model;

module.exports = {
    initialize: internals.initialize,
    model: internals.model
};
