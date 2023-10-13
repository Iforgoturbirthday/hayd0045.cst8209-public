const catalogue = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction"}, 
    {title: "The Wealthy Barber", author: "David Chilton", genre: "Non-Fiction"}
]

console.log(catalogue)

//Used to add a new book to the catalogue. 
//The function should accept three parameters for the book's title, author, and genre. 
//The function should return an appropriate response.

function addBook(title, author, genre) {
    const book = {
        title: title,
        author: author,
        genre: genre
    }

    catalogue.push(book)
    console.log('Your book has been added to the catalogue')

}

//Used to display a list of book titles and their indexes in the catalogue. 
//This list will be displayed in the console

function showBooks() {
   
    catalogue.forEach((book, index) => {
     console.log(`[${index}] ${book.title}`)
    });

}

//Used to display the details of a book, including the book's title, author, and genre. 
//The book's details will be displayed in the console. 
//The function should accept one parameter for the book's index.

function showBook(index) {

    if (index >= 0 && index < catalogue.length) {
        const book = catalogue [index];
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Genre: ${book.genre}`);
    } else {
        console.log("This is not a valid index!")
    }
    
}