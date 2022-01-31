const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Dals = require('../../dals');
const internals = require('./internals');
const Internals = require('./internals')

const register = async (params, res) => {
    try {
        // Get user input
        const { firstName, lastName, email, password, isAdmin, isSuspended } = params;

        // check if user already exist
        // Validate if user exist in our database
        const existingUser = await Dals.auth.findByEmail({ email });

        if (existingUser) {
          return res.status(409).send("User Already Exist. Please Login!");
        }

        const userObject = {
            firstName,
            lastName,
            email: email.toLowerCase()
        }

        //Encrypt user password
        userObject.encryptedPassword = await Bcrypt.hash(password, 10);

        //Update user object with, if user will be admin
        if(isAdmin) {
            userObject.isAdmin = isAdmin;
        }

        //Update user object, if user will be suspended
        if(isSuspended) {
            userObject.isSuspended = isSuspended;
        }

        // Create user in database
        const user = await Dals.auth.create(userObject);

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );

        // save user token
        user.token = token;

        // return new user
        res.status(201).json(Internals._prepareUserObject(user));

    } catch (err) {
        console.log(err);
    }
};

module.exports = register;


