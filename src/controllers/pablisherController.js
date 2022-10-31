const publishermodel = require("../models/publisherm1")


const CreatePublisher = async function(req,res)
{
    let publisher = req.body
    let CreatePublisher = await publishermodel.create(publisher)
    res.send({"publisher" : CreatePublisher})
}

module.exports.CreatePublisher = CreatePublisher