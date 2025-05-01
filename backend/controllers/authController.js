const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generate } = require('../helpers/token');

async function register(login, email, password) {
  const isUserExist = await User.findOne({ $or: [{ email }, { login }] });

  if (isUserExist) {
    throw new Error('Пользователь с таким логином или email уже зарегистрирован.');
  }

  if (!password) {
    throw new Error('Введите пароль');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ login, email, password: hashedPassword });
  const token = generate({ id: user.id });

  return { user, token };
}

async function login(login, password) {
  const user = await User.findOne({ login });

  if (!user) {
    throw new Error('Пользователь не найден');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Неверный пароль');
  }

  const token = generate({ id: user.id });

  return { token, user };
}

module.exports = {
  register,
  login,
};
