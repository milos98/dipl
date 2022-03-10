const LeadsFacade = require('../../../facade/leads')
const Validation = require('../../../validation')

const updateLead = (req, res) => {

    const params = {
        leadObject: {
            id: req.body.id,
            contact: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                title: req.body.title,
                contactMethod: req.body.contactMethod
            },
            company: {
                companyName: req.body.companyName,
                website: req.body.website,
                address: req.body.address,
                floor: req.body.floor,
                city: req.body.city,
                zip: req.body.zip
            },
            deal: {
                followUpDate: req.body.followUpDate,
                dealStage: req.body.dealStage,
                pipeline: req.body.pipeline,
                notes: req.body.notes
            },
            accountManager: req.body.accountManager
        },
        user_id: req.auth.user_id
    };

    const validationResult = Validation.leadValidation.validate(params);

    if(validationResult.error) {

        return res.status(400).json({
            message: 'All inputs are required! '+ validationResult.error.toString()
        });
    }

    return LeadsFacade.update(params, res);
};

module.exports = updateLead;