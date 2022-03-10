const _prepareuserObject = (user) => {
    user.encryptedPassword = undefined;
    user.id = user._id;
    console.log(user);
    return user;
};

module.exports = _prepareuserObject;
