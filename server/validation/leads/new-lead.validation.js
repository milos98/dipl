const Joi = require('joi').extend(require('@joi/date'));
const Constants = require('../../constants')

const schema = Joi.object({
    contact: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        title: Joi.string().required(),
        contactMethod: Joi.string().allow(...Constants.contactMethods).required()
    }),
    company: Joi.object({
        companyName: Joi.string().required(),
        website: Joi.string().required(),
        address: Joi.string().required(),
        floor: Joi.number(),
        city: Joi.string().required(),
        zip: Joi.number().required()
    }),
    deal: Joi.object({
        followUpDate: Joi.date().format('YYYY-MM-DD').utc(),
        dealStage: Joi.string().required(),
        pipeline: Joi.number().required(),
        notes: Joi.string().required()
    }),
    accountManager: Joi.string().pattern(/^[a-fA-F0-9]{24}$/)
});

module.exports = schema;