const Joi = require('joi');

const schema = Joi.object({
    id: Joi.string().pattern(/^[a-fA-F0-9]{24}$/),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6),
    isAdmin: Joi.boolean(),
    isSuspended: Joi.boolean()
});

module.exports = schema;