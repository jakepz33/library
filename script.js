


const library = document.querySelector('.added-books');
const myLibrary = [];
const dialog = document.querySelector("dialog")
const showButton = document.querySelector(".add-book")
const submitButton = document.querySelector("dialog button")

// Display Dialog 
showButton.addEventListener("click", () => {
    dialog.showModal();
})


// When Dialog form is submitted
submitButton.addEventListener("click", () => {
    // assigned dialog elements
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const haveReadCheckbox = document.getElementById('have-read');

    // initialize value holder variables
    let title, author, pages, haveRead;

    // to make sure each field is completed
    if (titleInput.checkValidity() && authorInput.checkValidity() && pagesInput.checkValidity()) {
        title = titleInput.value;
        author = authorInput.value;
        pages = pagesInput.value;
        haveRead = haveReadCheckbox.checked;
    } else {
        alert("Please gill out all the required fields.");
        return;
    }
    
    // create new Book object and add to array
    let addBook = new Book(title, author, pages, haveRead);
    myLibrary.push(addBook)
    
    // clear value and innerHTML
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    haveReadCheckbox.checked = false;
    library.innerHTML = '';

    
    addBookToLibrary();
    dialog.close();
})

document.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
})

// Book object
function Book(title, author, pages, read) {
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
}


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
        buttonRead.style.background = book.read ? "rgb(129, 233, 155)" : "rgb(233, 233, 233)";

        //toggle read or not read
        buttonRead.addEventListener("click", () => {
            book.read = !book.read; // if false: toggles it

            buttonRead.textContent = book.read ? "Read" : "Not Read";
            buttonRead.style.backgroundColor = book.read ? "rgb(129, 233, 155)" : "rgb(233, 233, 233)";
        })
        
        //remove item from DOM and array
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




