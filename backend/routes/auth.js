const express = require('express');
const { register, login: loginUser } = require('../controllers/authController');
const mapUser = require('../helpers/mapUser');

const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res) => {
  const { login, email, password } = req.body;

  try {
    const { user, token } = await register(login, email, password);

    res
      .cookie('token', token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || 'Неизвестная ошибка' });
  }
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const { user, token } = await loginUser(login, password);

    res
      .cookie('token', token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || 'Неизвестная ошибка' });
  }
});

router.post('/logout', (req, res) => {
  res.cookie('token', '', { httpOnly: true }).send({});
});

module.exports = router;
