const Database = require('./database');
const Users = require('./users');
const Leads = require('./leads');

module.exports = {
    initialize: async () => {
        await Database.initialize();
        Users.initialize();
        Leads.initialize();
    },
    users: Users,
    leads: Leads
};
