const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    dateCreated: Date,
    lastLogin: Date
});

const User = mongoose.model('users', UserSchema);

module.exports = User;