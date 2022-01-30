const Database = require('./database');

module.exports = {
    initialize: async () => {
        await Database.initialize();
    }
};
