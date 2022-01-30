const { Schema, Types } = require('mongoose');
const { DateTime } = require('luxon');

// Reaction subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: DateTime.now(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
);


const thoughtSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
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
