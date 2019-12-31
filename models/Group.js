const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    joinCode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = Group;