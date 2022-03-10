const Dals = require('../../dals');

const updateLead = async (params, res) => {
    try {
        // Get employee and lead info
        const { leadObject, user_id } = params;

        // check if lead exist
        const existingLead = await Dals.auth.findById({ lead });
        if (!existingLead) {
          return res.status(409).send("Lead doesn't exist!");
        }

        // check if user can update lead
        const existingUser = await Dals.users.findById(user_id);
        if (existingLead.accountManager !== user_id && !existingUser.isAdmin) {
          return res.status(403).send("User doesn't have permission to update this lead!");
        }

        // Update lead in database
        const lead = await Dals.leads.update(leadObject);

        // return updated lead
        res.status(201).json({ lead });

    } catch (err) {
        console.log(err);
    }
};

module.exports = updateLead;