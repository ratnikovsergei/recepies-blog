const express = require('express');
const {
  deleteUser,
  getAllUsers,
  getRoles,
  updateUserRole,
} = require('../controllers/userController');
const isAuth = require('../middlewares/isAuth');
const checkRole = require('../middlewares/checkRole');
const mapUser = require('../helpers/mapUser');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', isAuth, checkRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getAllUsers();

  res.send({ data: users.map(mapUser) });
});

router.get('/roles', isAuth, checkRole([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles();

  res.send({ data: roles });
});

router.patch('/:id', isAuth, checkRole([ROLES.ADMIN]), async (req, res) => {
  const updatedUser = await updateUserRole(req.params.id, { role: req.body.roleId });

  res.send({ data: mapUser(updatedUser) });
});

router.delete('/:id', isAuth, checkRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id);

  res.send({ error: null, message: 'Пользователь удален' });
});

module.exports = router;
