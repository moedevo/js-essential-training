// Create a basic function declaration
function subtraction(a,b) {
    c = a - b;
    return c;
}
// Call the function declaration
console.log('subtract a from b equals:',subtraction(10,5));

// Create function to make change to an element in the DOM
const movie = {
    title: "Joker",
    actor: "Joaquin Phoenix",
    rating: 8,
    releaseDate: "October 2, 2019",
}
const addMovie = function(current_movie) {
    newArticle = document.createElement("article")
    newArticle.innerHTML = `
    <h1>${current_movie.title}</h1>
    <ul>
        <li>${current_movie.actor}</li>
        <li>${current_movie.rating}</li>
        <li>${current_movie.releaseDate}</li>
    </ul>
    `;
    return newArticle
};
const main = document.querySelector("main")
main.append(addMovie(movie))

// Create a basic function expression
const division = function (a,b) {
    c = a/b;
    return c;
}
console.log('divide a from b equals:', division(100,10))

// Create an arrow function and call it
const addition = (a,b) => {
    c = a+b;
    return c;
}
console.log('addition using arrow function:', addition(100,10))
console.log("solved with L<3VE by @moedevo")