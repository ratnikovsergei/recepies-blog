const express = require('express');
const {
  createPost,
  editPost,
  deletePost,
  getPost,
  getAllPosts,
  getLastFivePosts,
} = require('../controllers/post');
const isAuth = require('../middlewares/isAuth');
const checkRole = require('../middlewares/checkRole');
const ROLES = require('../constants/roles');
const mapPost = require('../helpers/mapPost');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const { search, limit, page } = req.query;
  const { posts, lastPage } = await getAllPosts(search, limit, page);

  res.send({ data: { lastPage, posts: posts.map(mapPost) } });
});

router.get('/:id', async (req, res) => {
  const post = await getPost(req.params.id);

  res.send({ data: mapPost(post) });
});

router.get('/latest', async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;

  const posts = await getLastFivePosts(limit);
  res.send({ data: posts });
});

router.post('/', isAuth, checkRole([ROLES.ADMIN, ROLES.MODERATOR]), async (req, res) => {
  const { title, image, content } = req.body;
  const userId = req.user._id;

  const newPost = await createPost({ title, image, content }, userId);

  res.send({ data: mapPost(newPost) });
});

router.patch(
  '/:id',
  isAuth,
  checkRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    const { title, image, content } = req.body;

    const editedPost = await editPost(req.params.id, { title, image, content });

    res.send({ data: mapPost(editedPost) });
  }
);

router.delete(
  '/:id',
  isAuth,
  checkRole([ROLES.ADMIN, ROLES.MODERATOR]),
  async (req, res) => {
    await deletePost(req.params.id);

    res.send({ error: null, message: 'Статья удалена' });
  }
);

module.exports = router;
