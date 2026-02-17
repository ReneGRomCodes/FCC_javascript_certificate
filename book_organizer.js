const books = [
    {
        title: "The Fellowship of the Ring",
        authorName: "JRR Tolkien",
        releaseYear: 1954
    },
    {
        title: "The Two Towers",
        authorName: "JRR Tolkien",
        releaseYear: 1954
    },
    {
        title: "The Return of the King",
        authorName: "JRR Tolkien",
        releaseYear: 1955
    },
    {
        title: "The Hobbit",
        authorName: "JRR Tolkien",
        releaseYear: 1937
    },
    {
        title: "The Silmarillion",
        authorName: "JRR Tolkien",
        releaseYear: 1977
    }
];

function sortByYear(bookA, bookB) {
    if (bookA.releaseYear < bookB.releaseYear) {
        return -1;
    } else if (bookA.releaseYear > bookB.releaseYear) {
        return 1;
    } else {
        return 0;
    }
}

let filteredBooks = books
    .filter(book => book.releaseYear <= 1954)
    .sort(sortByYear);

console.log(filteredBooks);
