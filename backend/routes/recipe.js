const express = require('express');
const {
  createRecipe,
  editRecipe,
  deleteRecipe,
  getRecipe,
  getAllRecipes,
  getRecipesByCategory,
  getLastFiveRecipes,
} = require('../controllers/recipe');
const { addComment, deleteComment } = require('../controllers/comments');
const isAuth = require('../middlewares/isAuth');
const checkRole = require('../middlewares/checkRole');
const canEditRecipe = require('../middlewares/canEditRecipe');
const mapRecipe = require('../helpers/mapRecipe');
const mapComment = require('../helpers/mapComment');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const { search, limit, page } = req.query;
  const { recipes, lastPage } = await getAllRecipes(search, limit, page);

  res.send({ data: { lastPage, recipes: recipes.map(mapRecipe) } });
});

router.get('/:id', async (req, res) => {
  const recipe = await getRecipe(req.params.id);

  res.send({ data: mapRecipe(recipe) });
});

router.get('/latest', async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;

  const recipes = await getLastFiveRecipes(limit);
  res.send({ data: recipes.map(mapRecipe) });
});

router.get('/categories/:category', async (req, res) => {
  const { category } = req.params;
  const { limit, page } = req.query;

  const { recipes, lastPage } = await getRecipesByCategory(category, limit, page);
  res.send({ data: { lastPage, recipes: recipes.map(mapRecipe) } });
});

router.post('/', isAuth, async (req, res) => {
  const userId = req.user._id;
  const newRecipe = await createRecipe({ ...req.body }, userId);

  res.send({ data: mapRecipe(newRecipe) });
});

router.post('/:id/comments', isAuth, async (req, res) => {
  const newComment = await addComment(req.params.id, {
    content: req.body.content,
    author: req.user.id,
  });

  res.send({ data: mapComment(newComment) });
});

router.patch('/:id', isAuth, canEditRecipe, async (req, res) => {
  const editedRecipe = await editRecipe(req.params.id, req.body);

  res.send({ data: mapRecipe(editedRecipe) });
});

router.delete('/:id', isAuth, canEditRecipe, async (req, res) => {
  await deleteRecipe(req.params.id);

  res.send({ error: null, message: 'Рецепт удален' });
});

router.delete(
  '/:recId/comments/:commentId',
  isAuth,
  checkRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    await deleteComment(req.params.recId, req.params.commentId);

    res.send({ error: null, message: 'Комментарий удален' });
  }
);

module.exports = router;
