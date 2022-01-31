const _prepareuserObject = (user) => {
    user.encryptedPassword = undefined;
    console.log(user);
    return user;
};

module.exports = _prepareuserObject;
