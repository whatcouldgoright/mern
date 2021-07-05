const mongoose = require ('mongoose');

const ThoughtSchema = mongoose.Schema({
    thought: String,
    dateCreated: Date
});

const Thought = mongoose.model('thoughts', ThoughtSchema);

module.exports = Thought;