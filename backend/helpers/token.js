require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRES_IN = '15d';

module.exports = {
  generate(data) {
    return jwt.sign(data, SECRET_KEY, { expiresIn: EXPIRES_IN });
  },
  verify(token) {
    return jwt.verify(token, SECRET_KEY);
  },
};
