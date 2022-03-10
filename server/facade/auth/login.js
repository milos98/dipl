const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Dals = require('../../dals');
const Internals = require('./internals');

const register = async (params, res) => {
    try {
        // Get user input
        const { email, password } = params;

        // Validate if user exist in our database
        const user = await Dals.users.findByEmail({ email });

        if (user && (await Bcrypt.compare(password, user.encryptedPassword))) {
            // Create token
            const token = jwt.sign(
              { user_id: user._id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(Internals._prepareUserObject(user));
        }
        else {

          res.status(400).send("Invalid Credentials");
        }

    } catch (err) {
        console.log(err);
    }
};

module.exports = register;


