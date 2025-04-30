const mongoose = require('mongoose');
const { Schema } = mongoose;
const roles = require('../constants/roles');

const UserSchema = new Schema(
  {
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: roles.USER },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
