const Dals = require('../../dals');

const getAllUsersLeads = async (params, res) => {
    try {
        // Get user's info
        const { user_id } = params;

        // get all user-lead objects
        const leads = await Dals.leads.findByAccountManager(user_id);
        if (!leads) {
          return res.status(404).send("There are no leads!");
        }

        // return all leads assigned to user
        res.status(201).json( leads );

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = getAllUsersLeads;