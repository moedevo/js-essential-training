/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

//  var is globally-scoped
var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;
color = "red"; // cuz var is mutable
document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

// the function will affect all the code because var is globally-scoped so we use let instead to avoid this
function headingColor() {
  let color = "blue"; // if we use var here this will affect all the code! cuz var is globally-scoped
  document.querySelector(".title").style.color = color;
}
headingColor();

// var is used as globally-scoped and it's mutable
// let is used as locally-scoped and we can use it inside function to make affect only inside this function and it's also mutable
// const is constant and it can not be changed after assigning the value

// const color = "purple";
// color = "red";
// this will show error cuz const is unchangable and unmutable

// var global, mutable
// let local , mutable
// const both, unmutable
