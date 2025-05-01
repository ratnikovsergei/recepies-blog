const Post = require('../models/Post');

async function createPost(post) {
  const newPost = await Post.create(post);

  return newPost;
}
