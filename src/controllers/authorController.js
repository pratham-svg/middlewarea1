const AuthorModel= require("../models/authorm1")

const createAuthor= async function (req, res) {
    let author = req.body
    
    if(author.author_id){
     let authorCreated = await AuthorModel.create(author)
     return res.send({data: authorCreated}) }
    else
    {
      return res.send({data: " authorid detail is required "}) }   
    }


const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.aggregate([
       { $group : {_id:"$author_name", TotalNumberOfPages : { $sum : "$age"}}},
       {$sort : {TotalNumberOfPages : -1}}
       ])
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData