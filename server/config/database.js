require('dotenv').config();

module.exports = {
    uri: process.env.MONGO_DB_URI,
    settings: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}