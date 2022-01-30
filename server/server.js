const express = require('express');

const Dals = require('./dals');

const port = process.env.PORT || 3000;
const app = express();

async function start() {
    // Mongo Atlas DB connection
    await Dals.initialize();

    //Express middleware for parsing JSON bodies
    app.use(express.json());

    //Start server
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}

module.exports = start();
