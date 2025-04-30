const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generate } = require('../helpers/token');

async function register(login, password) {
  if (!password) {
    throw new Error('Password is empty');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ login, password: hashedPassword });
  const token = generate({ id: user.id });

  return { user, token };
}

async function login(login, password) {
  const user = await User.findOne({ login });

  if (!user) {
    throw new Error('User not found');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Wrong password');
  }

  const token = generate({ id: user.id });

  return { token, user };
}

module.exports = {
  register,
  login,
};
