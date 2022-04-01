const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Dals = require('../../dals');
const Internals = require('./internals');

const isAdmin = async (params, res) => {
    try {
        // Get user input
        const { email } = params;

        // Get user info from database
        const user = await Dals.users.findByEmail(email);

        if (user.isAdmin) {
            res.status(200).json(true);
        }
        else {
            res.status(401).json(false);
        }

    } catch (err) {
        console.log(err);
    }
};

module.exports = isAdmin;


