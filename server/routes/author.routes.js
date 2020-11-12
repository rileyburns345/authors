const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/', AuthorController.getAuthors)
    app.post('/', AuthorController.createAuthor)
    app.delete('/delete/:id', AuthorController.deleteAuthor)
    app.get('/:id', AuthorController.getOneAuthor)
    app.put('/update/:id', AuthorController.updateAuthor)
}



