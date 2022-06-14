const _prepareuserObject = (user) => {
    user.encryptedPassword = undefined;
    user.id = user._id;
    return user;
};

module.exports = _prepareuserObject;
