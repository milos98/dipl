const Helpers = require('../helpers');
const Dals = require('../../dals');

const getAllLeads = async (params, res) => {
    try {
        // Get user's info
        const { filter, user_id } = params;

        //check if user can gather all leads
        const existingUser = await Dals.users.findById(user_id);
        if (!existingUser.isAdmin) {
            return res.status(403).send("User doesn't have permissions for this!");
        }

        // get all lead objects
        const leads = await Dals.leads.findAll(Helpers.cleanse(filter));
        if (!leads) {
          return res.status(404).send("There are no leads!");
        }

        // return all users and leads assigned to them
        res.status(201).json( leads );

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = getAllLeads;