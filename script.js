

// constructor for Book objects

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let readbool;
        this.read === "yes"
        ? readbool = true
        : readbool = false;

        if(readbool){
            return(`${this.title} by ${this.author}, ${this.pages} pages, already read`)
        }else{
            return(`${this.title} by ${this.author}, ${this.pages} pages, has not read`)
        }
    }
}

const video = { // this is an object, the function is a method
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { // this is a function inside a function and reference global, therefor
            console.log(this.title, tag);
        }, this) // we need to include this.
    }
}

video.showTags();

function talk() {
    return `I am ${this.name}`
}

const me = {
    name: 'jake',
    talk
}

const you = {
    name: "Sina",
    talk
}

setTimeout(() => {
    console.log("Hello")
})
console.log(me.talk());
console.log(you.talk());

let book1 = new Book("Hobbit", "JK Rowling", 275, "yes");

console.log(book1.info())







