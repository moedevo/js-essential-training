// Declare a Variable 

const book = {
    title : "A Universe from Nothing",
    author : "Lawrence M. Krauss",
    pages : 224,
    releasedDate : "January 10, 2012"
}

const Addbook = (currentBook) => {
    newArticle = document.createElement("article")
    newArticle.innerHTML = `
    <h1>${currentBook.title}</h1>
    <ul>
        <li>Author: ${currentBook.author}</li>
        <li>Pages: ${currentBook.pages}</li>
        <li>Release Date: ${currentBook.releasedDate}</li>
    </ul>
    `;
    return newArticle;
}

const main = document.querySelector("main")
main.append(Addbook(book))

// Note: Arrow function can't be used inside a method