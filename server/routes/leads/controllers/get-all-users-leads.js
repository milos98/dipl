const LeadsFacade = require('../../../facade/leads');

const getAllUsersLeads = (req, res) => {

    const params = {
        user_id: req.auth.user_id
    }

    return LeadsFacade.getAllUsersLeads(params, res);
};

module.exports = getAllUsersLeads;