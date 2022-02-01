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
            trim: true,
            minlength: 1,
            maxlength: 280,
            required: [true, `Enter your reaction`],
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
        _id: false
    },
);

module.exports = reactionSchema;