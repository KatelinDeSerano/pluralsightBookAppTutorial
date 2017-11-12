var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
            {
                title: 'War and Peace',
                genre: 'Historical Fiction',
                author: 'Lev Nikolyevich Tolstoy',
                read: false
            },
            {
                title: 'Cat in the Hat',
                genre: 'Fiction',
                author: 'Dr Suess',
                read: true
            },
            {
                title: 'Don Quixote',
                genre: 'Historical Fiction',
                author: 'Miguel De Cervantes',
                read: false
            },
            {
                title: 'My Story',
                genre: 'Biography',
                author: 'Jane Doe',
                read: false
            },
];
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books', 
                nav: nav,
                books: books
               });
    });
    
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books', 
                nav: nav,
                book: books[id]
               });
    });
    return bookRouter;
}



module.exports = router;
