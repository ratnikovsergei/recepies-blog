const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

const RecipeSchema = new Schema(
  {
    title: { type: String, required: true },
    image: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: 'Картинка должна содержать верный URL-адрес',
      },
    },
    category: {
      type: String,
      enum: ['breakfast', 'lunch', 'salads', 'desserts', 'sides', 'drinks'],
      required: true,
    },
    ingredients: [ingredientSchema],
    instructions: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
