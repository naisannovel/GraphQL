const { Schema, model } = require('mongoose');

const BookSChema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    genre: {
        type: String,
        required: true,
        minlength: 1
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
})


module.exports = model('Books', BookSChema);