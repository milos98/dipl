const LeadsFacade = require('../../../facade/leads')
const Validation = require('../../../validation')

const createLead = (req, res) => {

    const validationResult = Validation.newLeadValidation.validate(req.body);

    if(validationResult.error) {
        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    const params = {
        leadObject: {
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

    return LeadsFacade.create(params, res);
};

module.exports = createLead;