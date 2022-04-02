const LeadsFacade = require('../../../facade/leads')
const Validation = require('../../../validation')

const updateLead = (req, res) => {

    const params = {
        leadObject: {
            id: req.params.id,
            contact: {
                firstName: req.body.contact.firstName,
                lastName: req.body.contact.lastName,
                email: req.body.contact.email,
                phone: req.body.contact.phone,
                title: req.body.contact.title,
                contactMethod: req.body.contact.contactMethod
            },
            company: {
                companyName: req.body.company.companyName,
                website: req.body.company.website,
                address: req.body.company.address,
                floor: req.body.company.floor,
                city: req.body.company.city,
                zip: req.body.company.zip
            },
            deal: {
                followUpDate: req.body.deal.followUpDate,
                dealStage: req.body.deal.dealStage,
                pipeline: req.body.deal.pipeline,
                notes: req.body.deal.notes
            },
            accountManager: req.body.accountManager || req.auth.user_id
        },
        user_id: req.auth.user_id
    };

    const validationResult = Validation.leadsValidation.leadValidation.validate(params.leadObject);

    if(validationResult.error) {

        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    return LeadsFacade.update(params, res);
};

module.exports = updateLead;