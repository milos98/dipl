const jwt = require("jsonwebtoken");

const config = require('./../config');
const Dals = require('../dals')

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.auth.tokenKey);
    req.auth = decoded;
    console.log(decoded);

    const user = await Dals.users.findById(decoded.user_id);

    if(!user.isSuspended) {
      return res.status(403).send("User suspended");
    }

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
