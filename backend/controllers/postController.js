const Post = require('../models/Post');

async function createPost(post, userId) {
  const newPost = await Post.create({ ...post, author: userId });

  return newPost.populate('author', 'login');
}

async function editPost(postId, data) {
  const editedPost = Post.findByIdAndUpdate(postId, data, { returnDocument: 'after' });

  return editedPost;
}

async function getPost(postId) {
  return Post.findById(postId).populate('author', 'login');
}

async function getAllPosts(search = '', limit = 10, page = 1) {
  const [posts, count] = await Promise.all([
    Post.find({ title: { $regex: search, $options: 'i' } })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate('author', 'login'),
    Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
  ]);

  return {
    posts,
    lastPage: Math.ceil(count / limit),
  };
}

async function getLastFivePosts(limit = 5) {
  const lastPosts = await Post.find().limit(limit).sort({ createdAt: -1 });

  return lastPosts;
}

function deletePost(postId) {
  return Post.deleteOne({ _id: postId });
}

module.exports = {
  createPost,
  editPost,
  getPost,
  getAllPosts,
  getLastFivePosts,
  deletePost,
};
