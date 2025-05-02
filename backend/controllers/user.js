const User = require('../models/User');
const ROLES = require('../constants/roles');

function getAllUsers() {
  return User.find();
}

function getRoles() {
  return [
    { id: ROLES.ADMIN, name: 'Администратор' },
    { id: ROLES.MODERATOR, name: 'Модератор' },
    { id: ROLES.USER, name: 'Пользователь' },
  ];
}

async function updateUserRole(userId, newRole) {
  return User.findByIdAndUpdate(userId, newRole, { returnDocument: 'after' });
}

function deleteUser(userId) {
  return User.findByIdAndDelete({ _id: userId });
}

module.exports = {
  getAllUsers,
  getRoles,
  updateUserRole,
  deleteUser,
};
