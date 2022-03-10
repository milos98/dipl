const Create = require('./create');
const Update = require('./update');
const GetAll = require('./get-all-leads');
const GetAllUsersLeads = require('./get-all-users-leads');

module.exports = {
    create: Create,
    update: Update,
    getAll: GetAll,
    getAllUsersLeads: GetAllUsersLeads
};
