const Assert = require('assert');
const Mongoose = require('mongoose');

const config = require('../../config/database');

const DB = {
    connection: null,
    mongoose: null,
    database: null,

    initialize: async () => {
        try {
            if (DB.database) return;

            Assert(config.uri, 'Database connection string must be provided!')

            DB.database = await Mongoose.connect(config.uri, config.settings);
            console.log('Connected to database!')
        }
        catch (error) {
            console.error('Error while connecting to database:', error);
            // throw error;
        }
    },

    closeDatabase: async () => {
        if (DB.database) {
            await DB.database.close();
            DB.database = null;
        }
    },

    createCollection: (collectionName, schema) => { return DB.database.model(collectionName, schema); },

    dropDatabase: () => { if (DB.database) return DB.database.db.dropDatabase() },

    initAndDropDatabase: async () => {
        await DB.closeDatabase();
        await DB.initialize();
        await DB.dropDatabase();
    }
};

module.exports = DB;
