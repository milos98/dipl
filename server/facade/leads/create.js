const Dals = require('../../dals');

const createLead = async (params, res) => {
    try {
        // Get employee and lead info
        const { leadObject, user_id } = params;

        // check if employee exist
        const existingUser = await Dals.users.findById(user_id);
        if (!existingUser) {
          return res.status(404).send("User doesn't exist!");
        }

        // check if lead exist
        const existingLead = await Dals.leads.findByEmail(leadObject.contact.email);
        if (existingLead) {
          return res.status(403).send("Lead already exist!");
        }

        // Create lead in database
        const lead = await Dals.leads.create(leadObject);

        // return new lead
        res.status(201).json({ lead });

    } catch (err) {
        console.log(err);
    }
};

module.exports = createLead;