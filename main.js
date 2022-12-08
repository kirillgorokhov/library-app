const libraryGrid = document.querySelector("#libraryGrid");   
const getBookFromInput = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    clearForm();
  });

// create the library object and pre-fill it with a couple of books
let myLibrary = [
    {
        title: "War and Piece",
        author: "Leo Tolstoy",
        pages: 1000,
        read: "Read"
    },

    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 200,
        read: "Not read"
    },
];

// constructor for new books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
}


function createBookCard (book) {

const bookCard = document.createElement('div')
const title = document.createElement('p')
const author = document.createElement('p')
const pages = document.createElement('p')
const buttonGroup = document.createElement('div')
const readBtn = document.createElement('button')
const removeBtn = document.createElement('button')

bookCard.classList.add('book-card')
buttonGroup.classList.add('button-group')
readBtn.classList.add('btn')
removeBtn.classList.add('btn')
// removeBtn.setAttribute('id', 'removeBtn');

title.textContent = book.title
author.textContent = book.author
pages.textContent = `${book.pages} pages`
removeBtn.textContent = 'Remove'

bookCard.appendChild(title)
bookCard.appendChild(author)
bookCard.appendChild(pages)
buttonGroup.appendChild(readBtn)
buttonGroup.appendChild(removeBtn)
bookCard.appendChild(buttonGroup)
libraryGrid.appendChild(bookCard)

// Remove book on click
removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book),1);
    displayBooks()
});

// toggle read/not read on click
readBtn.addEventListener('click', () => { 
    if (book.read=="Not read") book.read = "Read";
    else book.read = "Not read";
    console.log(book);
    displayBooks();
}); 


// Change read button colour
if (book.read==='Not read') {
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#e04f63';
} else {
    readBtn.textContent = 'Read';
    readBtn.style.backgroundColor = '#63da63'
}

}


function displayBooks() {
    resetDisplayedBooks();
    for (let book of myLibrary) {
        createBookCard(book)
      }
}

function resetDisplayedBooks() {
    libraryGrid.innerHTML = ''
}


function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
}

displayBooks();