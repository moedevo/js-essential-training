// Function : An algorithm turned into code of a list of steps
// a Function sits on itself but a Method sits inside an object

// Different ways for creating a function 

// 1. Function Decoration 
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// 2. Function Expression 
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// 3. Immediately Invoked Function Expression [IIFE]
// running a function immediately without calling it 

(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();