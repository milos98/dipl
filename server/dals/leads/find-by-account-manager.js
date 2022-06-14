const Mongoose = require('mongoose');
const Model = require('./model');

const findByAccountManager = (id, filter) => {

    const model = Model.model();

    const objId = Mongoose.Types.ObjectId(id);

    return model.aggregate([
        { '$match': { accountManager : objId, ...filter } },
        {
            $group: {
                _id: '$accountManager',
                leads: { $push: '$$ROOT' }
            }
        },
        {
            $lookup:
              {
                from: 'users',
                localField: '_id',
                foreignField: '_id',
                as: 'userInfo'
              }
        },
        {
           $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$userInfo", 0 ] }, "$$ROOT" ] } }
        },
        { $unset: [ 'encryptedPassword', 'isSuspended', '__v', 'userInfo', 'isAdmin' ] }
    ]);
};

module.exports = findByAccountManager;
