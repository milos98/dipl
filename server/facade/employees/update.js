const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Dals = require('../../dals');

const register = async (params, res) => {
    try {
        // Get user input
        const { id, firstName, lastName, email, password, isAdmin, isSuspended, user_id } = params;

        //check if user can perform the update
        // const existingRequestorUser = await Dals.users.findById(user_id);
        // if (!existingRequestorUser.isAdmin && id !== user_id) {
        //     return res.status(403).send("User doesn't have permissions for this!");
        // }

        // check if requested user for update already exist
        // Validate if user exist in our database
        const existingUser = await Dals.users.findById(id);

        if (!existingUser) {
          return res.status(409).send("User doesn't exist. Please register this user first!");
        }

        const userObject = {
            id,
            firstName,
            lastName,
            email: email.toLowerCase(),
            isAdmin,
            isSuspended
        }

        // Encrypt user password
        if(password) {
            userObject.encryptedPassword = await Bcrypt.hash(password, 10);
        }
        else{
            userObject.encryptedPassword = existingUser.encryptedPassword;
        }

        // Update user in database
        await Dals.users.update(userObject);

        // return new user
        res.status(200).send('OK');

    } catch (err) {
        console.log(err);
    }
};

module.exports = register;


