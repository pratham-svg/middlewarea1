const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "author"
    }, 
    price: Number,
    ratings: Number ,
    publisher: {
        type: ObjectId,
        ref: "publisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('data_book', bookSchema)
