import Backpack from "./backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2019",
  "./everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

/**
 * Add a navigation section to the DOM
 */

// navContent
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other Things</a></li>
      <li><a href="#">Contact</a></li>
`;
// creating nav element
const mainNav = document.createElement("nav")
// add class name
mainNav.classList.add("main-navigation")
// create ul element
const navList = document.createElement("ul")
// adding navContent to navList
navList.innerHTML = navContent
// adding navList to the mainNav
mainNav.append(navList)
// Adding mainNav to the site header
document.querySelector(".siteheader").append(mainNav)

// Translate code to html language
/**
<header class="siteheader">
  <nav class="main-navigation">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other Things</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
*/