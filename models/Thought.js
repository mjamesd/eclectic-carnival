const { Schema, Types } = require('mongoose');
const { DateTime } = require('luxon');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: [true, `Enter your thoughts`],
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: DateTime.now(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .pre(['save', 'updateOne', 'findOneAndUpdate'])
  .get((next) => {
    // Will send username and userId when creating or saving a thought
    // Confirm the username against the userId by find()ing it, then return just that User.username as this.username

  });


thoughtSchema
  .virtual('reactionCount')
  .get((next) => {
    return this.reactions.length;
  });

module.exports = thoughtSchema;