// targetting an element 
document.querySelector("div");

// targetting a class
document.querySelector(".main");

// targetting unordered list last child
document.querySelector("div ul li:last-child");

// using querySelectorAll to return a nodelist of all elements inside
document.querySelectorAll("ul li");

// using querySelectorAll to do some actions
document.querySelectorAll("ul li").forEach(item => item.style.backgroundColor = "yellow");
document.querySelectorAll("ul li:first-child").forEach(item => item.style.backgroundColor = "red");

// using older methods 
document.getElementsByClassName("main");
document.getElementById("mainid");

// modifying element using className {don't use it with react}
document.querySelector("h1").className = "bookTitle";

// modifying element using classList
document.querySelector("h1").classList.add("add");
document.querySelector("h1").classList.remove("add");
document.querySelector("h1").classList.toggle("add");
document.querySelector("h1").classList.replace("add","newclass");

// attributes
document.querySelector("img").attributes;
document.querySelector("img").hasAttribute("src");
document.querySelector("img").setAttribute("alt","jslogo");
document.querySelector("img").removeAttribute("alt");