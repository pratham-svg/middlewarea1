const authorModel = require("../models/authorm1")
const bookModel= require("../models/bookm1")
const ObjectId = require('mongoose').Types.ObjectId;
function isValidObjectId(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}
const createBook= async function (req, res) {
    let book = req.body
    if( isValidObjectId(book.author) == false && isValidObjectId(book.publisher)== false )
    {
        return res.send({msg :"enter a valid id "})
    }
    else 
    {
        let bookCreated = await bookModel.create(book)
        return res.send({data: bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
