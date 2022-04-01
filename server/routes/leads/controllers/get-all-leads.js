const LeadsFacade = require('../../../facade/leads');

const getAllLeads = (req, res) => {

    const params = {
        user_id: '61f71155c19cde1fb934ad59'
    }

    return LeadsFacade.getAll(params, res);
};

module.exports = getAllLeads;