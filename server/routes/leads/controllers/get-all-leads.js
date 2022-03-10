const LeadsFacade = require('../../../facade/leads');

const getAllLeads = (req, res) => {

    const params = {
        user_id: req.auth.user_id
    }

    return LeadsFacade.getAll(params, res);
};

module.exports = getAllLeads;