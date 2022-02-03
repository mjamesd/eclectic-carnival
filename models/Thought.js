const { Schema, model } = require('mongoose');
const { DateTime } = require('luxon');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
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
        id: false
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;