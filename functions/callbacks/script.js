const button = document.querySelector('button');

function toggle() {
  button.classList.toggle('altColor')
}
// without () toggle is callback function
button.addEventListener('click', toggle)

//---------------------------------------------//

function firstAction() {
  console.log("Im the first function")
  
}

function secondAction() {
  console.log("Im the second function")
  
}
setTimeout(firstAction, 5000)
secondAction()