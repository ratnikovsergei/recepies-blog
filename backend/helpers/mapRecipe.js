const mongoose = require('mongoose');
const mapComment = require('./mapComment');

module.exports = function (recipe) {
  return {
    id: recipe.id,
    title: recipe.title,
    imageUrl: recipe.image,
    category: recipe.category,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    comments: recipe.comments.map((comment) =>
      mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
    ),
    author: recipe.author.login,
    publishedAt: recipe.createdAt.toLocaleString(),
  };
};
