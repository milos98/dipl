const Model = require('./model');

const findAll = () => {

    const model = Model.model();

    const query = { };

    return model.aggregate([
        { '$match': { _id : {$exists: true} } },
        {
            $group: {
                _id: '$accountManager',
                leads: { $push: '$$ROOT' }
            }
        },
        { $unset: [ "leads.accountManager" ] },
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

module.exports = findAll;
