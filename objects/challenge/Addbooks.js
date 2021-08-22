import Book from './Book.js';

const oceanOfSound = new Book (
    "Ocean of Sound: Aether Talk, Ambient Sound and Imaginary Worlds",
    "David Toop",
    "Music",
    "This isn't just a potted history of ambient music.It's a meditation on why people make music",
    true,
    false,
    320,
    "$29",
    "February 22, 2001"
);

console.log('Book Object:', oceanOfSound);
console.log('Title:', oceanOfSound.title);
console.log('Author:', oceanOfSound.author);
console.log('Genre:', oceanOfSound.genre);
console.log('Description:', oceanOfSound.description);
console.log('Colorful:', oceanOfSound.colorful);
console.log('BlackAndWhite:', oceanOfSound.blackAndWhite);
console.log('PagesNumber:', oceanOfSound.pagesNumber);
console.log('Price:', oceanOfSound.price);
console.log('Date Issued:', oceanOfSound.dateIssued);
console.log('YearsSinceIssued:', oceanOfSound.bookAge());
console.log('Solved with L<3VE by @moedevo')