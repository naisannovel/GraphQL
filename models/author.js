const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = model('Authors', AuthorSchema);