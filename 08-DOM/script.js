/* 
    element selection
*/

let head = document.getElementById("head");
console.log(head);

let main = document.getElementsByClassName("headline");
console.log(main);

let footer = document.getElementsByTagName("p");
console.log(footer);

let header = document.querySelector("h1");
console.log(header.innerText);

/* 
    Attributes
*/

let div1 = document.querySelector("div"); // it returns first div, not others
let className = div1.getAttribute("class");
console.log(className);

let headIdChange = document.querySelector("h1");
let idName = headIdChange.getAttribute("id");
console.log(idName); // head
idName = headIdChange.setAttribute("id", "changedId");
console.log(idName); // undefined - but changed id is shown in the element tab in browser

/* 
    style
*/

let div3 = document.querySelector("div");
div3.style.backgroundColor = "red";
div3.style.color = "white";
div3.style.fontFamily = "Arial";
div3.style.fontSize = "50px";
