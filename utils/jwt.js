// utils/jwt.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  return jwt.sign({username: user.username}, process.env.JWT_SECRET);
};

module.exports = generateToken;
