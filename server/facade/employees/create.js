const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Dals = require('../../dals');

const create = async (params, res) => {
    try {
        // Get user input
        const { firstName, lastName, email, password, isAdmin, isSuspended } = params;

        // check if user already exist
        // Validate if user exist in our database
        const existingUser = await Dals.users.findByEmail(email);

        if (existingUser) {
          return res.status(409).send("User Already Exist. Please Login!");
        }

        const userObject = {
            firstName,
            lastName,
            email: email.toLowerCase(),
            isAdmin,
            isSuspended
        }

        //Encrypt user password
        userObject.encryptedPassword = await Bcrypt.hash(password, 10);

        // Create user in database
        const user = await Dals.users.create(userObject);

        // return new user
        res.status(200).json(`User with email ${user.email} successfully created!`);

    } catch (err) {
        console.log(err);
    }
};

module.exports = create;


