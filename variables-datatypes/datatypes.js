/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// String:
let stringDemo = "A string of text.";
console.log("String:", typeof stringDemo);

// Numbers:
let integerDemo = 4;
console.log("Integer:",  integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:",  floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:",  booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:",  nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:",  undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:",  undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:",  objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:",  arrayDemo);


// Assignment vs. comparision 
let a = 5;
let b = 4;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
// = to assign the value
// == and === for comparising two values
//=== is more identical than ==
// > , < , >= , <= , !== , ===! other comparisions

// Math operators

console.log("addition", a+b)
console.log("subtraction", a-b)
console.log("division", a/b)
console.log("multiplication", a*b)
console.log("powerof", a**b)
console.log("morethanoperator", (a*b)/2)
console.log("modulu:reminder", a%b)
console.log("increment", ++a)
console.log("decrement", --a)

// 4 + "4" = 44
// tip: use numbers with numbers only