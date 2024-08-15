const JWT = require("jsonwebtoken");

const secret = process.env.SECRET;

const createToken = (user) => {
  const payload = {
    _id: user._id,
    usrname: user.usrname,
    email: user.email,
  };
  const token = JWT.sign(payload, secret);
  return token;
};

module.exports = { createToken };
