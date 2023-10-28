


const library = document.querySelector('.added-books');

const myLibrary = [];

const dialog = document.querySelector("dialog")
const showButton = document.querySelector(".add-book")
const submitButton = document.querySelector("dialog button")
let count = 0

// dialog test

showButton.addEventListener("click", () => {
    dialog.showModal();
})


submitButton.addEventListener("click", () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const haveReadCheckbox = document.getElementById('have-read');

    const title = titleInput.value 
    const author = authorInput.value
    const pages = pagesInput.value;
    const haveRead = haveReadCheckbox.checked;
    //const haveRead = haveReadCheckbox.value ? "Read" : "Not Read";

    console.log(`Title ${title}`)
    console.log(`Author ${author}`)
    console.log(`Pages ${pages}`)
    console.log(haveReadCheckbox);

    let bookCount = `Book count ${count}`
    console.log(bookCount);

    let addBook = new Book(title, author, pages, haveRead, count);
    myLibrary.push(addBook)

    console.log(addBook)
    count += 1
    
    
    // clear value and innerHTML
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    haveReadCheckbox.checked = false;
    library.innerHTML = '';

    
    addBookToLibrary();
    dialog.close();
})

// function dialogClear(title, author, pages, haveRead) {

// }

function Book(title, author, pages, read) {
    // the constructor
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
   // this.read => need to make it call a function to change view?
}

// let buttonRemove = document.createElement('button')

function addBookToLibrary() {
    myLibrary.forEach(function(book, index) { // for each item in list this is what going to happen
        selectedBook = book

        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const buttongroup = document.createElement('div')

        title.textContent = `"${selectedBook.title}"`
        author.textContent = selectedBook.author
        pages.textContent = `${selectedBook.pages} pages`

        buttongroup.classList.add('button-group')
        const buttonRead = document.createElement('button')
        const buttonRemove = document.createElement('button')

        buttonRemove.setAttribute("id", "removeButtonID")
        buttonRead.classList.add("readButton")

        buttonRead.textContent = "Not Read"
        buttonRemove.textContent = "Remove"

        buttonRead.textContent = book.read ? "Read" : "Not Read"; // if checked = True
        buttonRead.style.background = book.read ? "rgb(4, 173, 4)" : "rgb(225, 225, 225)";
        buttonRead.addEventListener("click", () => {
            book.read = !book.read; // if false: toggles it

            buttonRead.textContent = book.read ? "Read" : "Not Read";
            buttonRead.style.backgroundColor = book.read ? "rgb(4, 173, 4)" : "rgb(225, 225, 225)";
        })
    
        buttonRemove.addEventListener("click", () => {
            const indexToRemove = index;
            myLibrary.splice(indexToRemove, 1);

            card.remove();
            console.log('Index', index)
            console.log("This is working")
            console.log(myLibrary);
        })
        buttongroup.appendChild(buttonRead)
        buttongroup.appendChild(buttonRemove)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(buttongroup)
        library.appendChild(card)
    })

}



function processLibrary(library) {
    library.forEach(function (item) {
        addBookToLibrary(item)
        console.log(item);
    })
}

processLibrary(myLibrary);
