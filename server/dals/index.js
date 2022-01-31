const Database = require('./database');
const Auth = require('./auth');

module.exports = {
    initialize: async () => {
        await Database.initialize();
        Auth.initialize();
    },
    auth: Auth,
};
