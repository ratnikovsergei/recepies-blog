const Recipe = require('../models/Recipe');
const ROLES = require('../constants/roles');

module.exports = async function (req, res, next) {
  try {
    const user = req.user;

    if ([ROLES.ADMIN, ROLES.MODERATOR].includes(user.role)) {
      return next();
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      res.send({ error: 'Рецепт не найден' });
    }

    if (recipe.author.toString() === user._id.toString()) {
      return next();
    }

    return res.send({ error: 'Доступ запрещен' });
  } catch (e) {
    res.send({ error: e.message || 'Доступ запрещен' });
  }
};
