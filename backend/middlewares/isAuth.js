const User = require('../models/User');
const { verify } = require('../helpers/token');

module.exports = async function (req, res, next) {
  const token = verify(req.cookies.token);

  const user = await User.findOne({ _id: token.id });

  if (!user) {
    res.send({ error: 'Неверный токен' });

    return;
  }

  req.user = user;
  next();
};
