/**
 * Practice: Pass values between functions
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const book = {
  title:"A Universe from Nothing",
  author: "Lawrence M. Krauss",
  genre:"Science",
  description:"A Universe from Nothing: Why There Is Something Rather than Nothing is a non-fiction book by the physicist Lawrence M. Krauss. It discusses modern cosmogony and its implications for the debate about the existence of God.",
  releaseDate: "Initially published on January 10, 2012 by Free Press",
  pagesNum: 224,
  rating: 3.9,
  image: "./book.jpg"
}

const bookDetails = `
  <h1>${book.title}</h1>
  <ul>
    <li><strong>Written by:</strong> ${book.author}</li><br>
    <li><strong>Genre:</strong> ${book.genre}</li><br>
    <li><strong>Description:</strong> ${book.description}</li><br>
    <li><strong>Release Date:</strong> ${book.releaseDate}</li><br>
    <li><strong>Pages Number:</strong> ${book.pagesNum}</li><br>
    <li><strong>Goodreads Rating:</strong> ${book.rating} /5</li><br>
  </ul>
  <h6>solved with LOVE by @moedevo</h6>
`
const Addfigure = (dataObj) => {
  let newFigure = document.createElement("figure")
  let newImg = document.createElement("img")
  newImg.setAttribute("src", dataObj.image)
  newImg.setAttribute("alt","book")
  let newDesc = document.createElement("figcaption")
  newDesc.innerText = "Bestselling author and acclaimed physicist Lawrence Krauss offers a paradigm-shifting view of how everything that exists came to be in the first place.";
  newFigure.append(newImg, newDesc);
  return newFigure;
};

const createArticle = (book) => {
  let newArticle = document.createElement("article")
  newArticle.innerHTML = bookDetails;
  newArticle.prepend(Addfigure(book))
  return newArticle;
};
document.querySelector("main").append(createArticle(book))