const LeadsFacade = require('../../../facade/leads');

const getAllLeads = (req, res) => {

    const params = {
        filter: {
            contact: {
                firstName: req.query.firstName || undefined,
                lastName: req.query.lastName || undefined,
                email: req.query.email || undefined,
                phone: req.query.phone || undefined
            },
            deal: {
                followUpDate: req.query.followUpDate || undefined,
                pipeline: req.query.pipeline || undefined,
                dealStage: req.query.dealStage || undefined
            }
        },
        user_id: req.auth.user_id
    };

    return LeadsFacade.getAll(params, res);
};

module.exports = getAllLeads;