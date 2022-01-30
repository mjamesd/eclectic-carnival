const { Schema, Types } = require('mongoose');
const { DateTime } = require('luxon');

const validateEmail = (email) => {
  var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return re.test(email)
};

// Schema to create Student model
const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Please submit a valid email address']
    },
    createdAt: {
      type: Date,
      default: DateTime.now(),
    },
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
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
