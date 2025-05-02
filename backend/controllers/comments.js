const Comment = require('../models/Comment');
const Recipe = require('../models/Recipe');

async function addComment(recId, comment) {
  const newComment = await Comment.create(comment);

  await Recipe.findByIdAndUpdate(recId, { $push: { comments: newComment } });
  await newComment.populate('author');

  return newComment;
}

async function deleteComment(recId, commentId) {
  await Comment.deleteOne({ _id: commentId });

  await Recipe.findByIdAndUpdate(recId, { $pull: { comments: commentId } });
}

module.exports = {
  addComment,
  deleteComment,
};
