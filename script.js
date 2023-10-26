


const library = document.querySelector('.added-books');

const myLibrary = [];

const dialog = document.querySelector("dialog")
const showButton = document.querySelector(".add-book")
const submitButton = document.querySelector("dialog button")
let count = 0

showButton.addEventListener("click", () => {
    dialog.showModal();
})
submitButton.addEventListener("click", () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('have-read').checked;
    console.log(`Title ${title}`)
    console.log(`Author ${author}`)
    console.log(`Pages ${pages}`)
    console.log(`Have read? ${haveRead ? 'yes' : 'No'}`)
    // count += 1
    let bookCount = `Book count ${count}`
    console.log(bookCount);
    let addBook = new Book(title, author, pages, haveRead, count);
    myLibrary.push(addBook)
    console.log(addBook)
    count += 1
    console.log(myLibrary);
    let lastItem = myLibrary[myLibrary.length-1]
    addBookToLibrary(lastItem);
    /*ADDING TO LIBRARY */
    //processLibrary(myLibrary);
    dialogClear();
    dialog.close();
})

function dialogClear() {

}

function Book(title, author, pages, read, index) {
    // the constructor
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
   this.index = index
   // this.read => need to make it call a function to change view?
}


function addBookToLibrary(item) {
    selectedBook = item

    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttongroup = document.createElement('div')

    title.textContent = selectedBook.title
    author.textContent = selectedBook.author
    pages.textContent = selectedBook.pages

    buttongroup.classList.add('button-group')
    const buttonRead = document.createElement('button')
    const buttonRemove = document.createElement('button')

    buttongroup.appendChild(buttonRead)
    buttongroup.appendChild(buttonRemove)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(buttongroup)
    library.appendChild(card)

}


// const book1 = new Book("Jake", "Harry Potter", 24,)
// const book2 = new Book("john", "Little engine", 23)
// const book3 = new Book("Alan", "Diary of a Wimpy kid", 55)
// // const book4 = new Book("Wss", "this is title", 55)
// console.log(book1.title)
// // console.log(book2.title)
// // console.log(book3.title)

// myLibrary.push(book1)
// myLibrary.push(book2)
// myLibrary.push(book3)

function processLibrary(library) {
    library.forEach(function (item) {
        addBookToLibrary(item)
        console.log(item);
    })
}

processLibrary(myLibrary);
