const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const PostSchema = new Schema(
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
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
