const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    joinedGroups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    createdGroups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group' }],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;