'use-strict'


function onInit() {
    _creatBooks()
    renderBooks()

}


function renderBooks() {
    // var books = getBooks();
    // var strHtmls = books.map(function (book) {
    var strHtmls = gBooks.map(function (book) {
        return `<tr>

            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.price}</td>
            <td><button class="read" onclick="onReadBook('${book.name}')"> Read </button></td> 
            <td><button class="update" onclick="onUpdateBook('${book.id}')"> Update </button></td> 
            <td><button class="delete"  onclick="onRemoveBook('${book.id}')"> Delete </button></td> 

        </tr>`

    })
    document.querySelector('tbody').innerHTML = strHtmls.join('');
  
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}


function onAddBook() {
    var name = prompt('What is the name of the book that you want to add?');
    var price = +prompt('what is his price?');
    if (!name || !price) return
    addBook(name, price);
    renderBooks();
}

function onUpdateBook(bookId) {
    var updatePrice = +prompt('Updated price of the book');
    if(!updatePrice) return
    updateBook(bookId, updatePrice);
    renderBooks();
}

function onReadBook(bookName) {
    document.querySelector('.book-details section').innerHTML =`<img src="img/${bookName}.jpg" />`; 
}


function onCloseModal() {
    document.querySelector('.modal').hidden = true;
}