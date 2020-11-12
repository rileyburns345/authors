const { request, response } = require("express");

const {Author} = require('../models/author.model')

module.exports.index = (request, response) => {
    response.json({
        message: 'mission complete'
    })
}

module.exports.createAuthor = (request, response) => {
    const {name} = request.body;
    Author.create({
        name
    })
    .then(author=>{response.json(author)})
    .catch(err=>response.status(400).json(err))
}

module.exports.getAuthors = (request, response) => {
    Author.find()
    .then(author=>{response.json(author)})
    .catch(err=>response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
    .then(author=>{response.json(author)})
    .catch(err=>response.status(400).json(err))
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
    .then(author=>{response.json(author)})
    .catch(err=>response.status(400).json(err))
}

module.exports.updateAuthor = (request, response) => {
    // Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true}, { runValidators: true })
    Author.findById(request.params.id)
    .then(author=>{
        author.updateOne(request.body, { runValidators: true })
        .then(author=>response.json(author))
        .catch(err=>response.status(400).json(err))
    })
    .catch(err=>response.status(400).json(err))
}