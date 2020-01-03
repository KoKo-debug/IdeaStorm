const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Idea = mongoose.model('Idea', IdeaSchema);
module.exports = Idea;