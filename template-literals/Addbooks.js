import Book from './Book.js';

const oceanOfSound = new Book (
    "Ocean of Sound: Aether Talk, Ambient Sound and Imaginary Worlds",
    "David Toop",
    "Music",
    "This isn't just a potted history of ambient music.It's a meditation on why people make music",
    320,
    "$29",
    "February 22, 2001"
);

const content = `
<h1>Book Details</h1>
<ul>
    <li><strong>Title:</strong> ${oceanOfSound.title}.</li>
    <li><strong>Author:</strong> ${oceanOfSound.author}.</li>
    <li><strong>Genre:</strong> ${oceanOfSound.genre}.</li>
    <li><strong>Description:</strong> ${oceanOfSound.description}.</li>
    <li><strong>Pages Number:</strong> ${oceanOfSound.pagesNumber}.</li>
    <li><strong>Price:</strong> ${oceanOfSound.price}.</li>
    <li><strong>Date Issued:</strong> ${oceanOfSound.dateIssued}.</li>
    <li><strong>Years Since Issued:</strong> ${oceanOfSound.bookAge()}.</li>
</ul>
`;
document.body.innerHTML = content;
