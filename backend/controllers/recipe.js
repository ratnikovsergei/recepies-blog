const Recipe = require('../models/Recipe');

async function createRecipe(data, userId) {
  const newRecipe = await Recipe.create({ ...data, author: userId });

  return newRecipe.populate({
    path: 'comments',
    populate: 'author',
  });
}

async function editRecipe(recId, data) {
  const editedRecipe = await Recipe.findByIdAndUpdate(recId, data, {
    returnDocument: 'after',
  });

  await editedRecipe.populate({
    path: 'comments',
    populate: 'author',
  });

  return editedRecipe;
}

async function getRecipe(recId) {
  return Recipe.findById(recId).populate({
    path: 'comments',
    populate: 'author',
  });
}

async function getAllRecipes(search = '', limit = 10, page = 1) {
  const [recipes, count] = await Promise.all([
    Recipe.find({ title: { $regex: search, $options: 'i' } })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    Recipe.countDocuments({ title: { $regex: search, $options: 'i' } }),
  ]);

  return {
    recipes,
    lastPage: Math.ceil(count / limit),
  };
}

async function getLastFiveRecipes(limit = 5) {
  const lastRecipes = await Recipe.find().limit(limit).sort({ createdAt: -1 });

  return lastRecipes;
}

function deleteRecipe(recId) {
  return Recipe.deleteOne({ _id: recId });
}

module.exports = {
  createRecipe,
  editRecipe,
  getRecipe,
  getAllRecipes,
  getLastFiveRecipes,
  deleteRecipe,
};
