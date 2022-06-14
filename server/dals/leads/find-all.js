// @ts-nocheck
const Model = require('./model');

const findAll = (filter) => {

    const model = Model.model();

    return model.aggregate([
        { '$match': { _id : {$exists: true}, ...filter } },
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
        { $unset: [ 'encryptedPassword', '__v', 'userInfo' ] }
    ]);
};

module.exports = findAll;
