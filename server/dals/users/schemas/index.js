const Mongoose = require('mongoose');

const internals = {};

internals.usersSchema = new Mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    encryptedPassword: { type: String, required: true },
    token: { type: String },
    isAdmin: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false }
});

internals.usersSchema.index({ email: 1 }, { unique: true });

module.exports = internals.usersSchema;
