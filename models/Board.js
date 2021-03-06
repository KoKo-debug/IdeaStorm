const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    group: {
        type: Schema.Types.ObjectId, 
        ref: 'Group'
    },
    ideas: [{
        type: Schema.Types.ObjectId,
        ref: 'Idea'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;