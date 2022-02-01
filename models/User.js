const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');

// will match work?
const validateEmail = (email) => {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
};

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, `Username required`],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, `Email required`],
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, `Please submit a valid email address`]
    },
    createdAt: {
      type: Date,
      default: DateTime.now(),
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  .get ( () => {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
