'use strict'
const KEY = 'books';
var gNamesBook = ['Harry Potter', 'Game of Thrones', 'Bribed Game'];
var gBooks;

// function getBooks() {
//     return gBooks;
// }

function updateBook(bookId, price) {
    var idxBook = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    gBooks[idxBook].price = price;
    // var book = gBooks.find(function (book) {
    //     return book.id === bookId;
    // });
    // book.price = price;
    _saveBooksToStorage();
}


function addBook(name, price) {
    var newBook = _creatBook(name, price);
    gBooks.unshift(newBook);
    _saveBooksToStorage();
}

function removeBook(id) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === id;
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function _creatBooks() {
    var books = loadFromStorage(KEY)
    if (!books || books.length === 0) {
        var books = []
        books = gNamesBook.map(function (name) {
            return _creatBook(name);
        });
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _creatBook(name, price, desc) {
    if (!price) price = getRandomIntInclusive(20, 60);
    return {
        id: makeId(),
        name: name,
        price: price,
        desc: desc 
    }
}


function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}
