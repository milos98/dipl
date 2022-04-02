const Mongoose = require('mongoose');

const internals = {};

internals.usersSchema = new Mongoose.Schema({
    contact: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        title: { type: String, required: true },
        contactMethod: { type: String, required: true }
    },
    company: {
        companyName: { type: String, required: true },
        website: { type: String, required: true },
        address: { type: String, required: true },
        floor: { type: Number, required: true },
        city: { type: String, required: true },
        zip: { type: Number, required: true },
    },
    deal: {
        followUpDate: { type: Date, required: true },
        dealStage: { type: String, required: true },
        pipeline: { type: Number, required: true },
        notes: { type: String, required: true }
    },
    accountManager: { type: Mongoose.Schema.ObjectId, required: true }
});

internals.usersSchema.index({ 'contact.email': 1 }, { unique: true });
internals.usersSchema.index({ 'contact.phone': 1 }, { unique: true });
internals.usersSchema.index({ 'company.companyName': 1 }, { unique: true });

module.exports = internals.usersSchema;
