const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    isAdmin: Joi.boolean(),
    isSuspended: Joi.boolean()
});

module.exports = schema;