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
div3.style.fontSize = "40px";

/* 
    insert elements

    append()    - adds at the end of node (inside)
    prepend()   - adds at the start of node (inside)
    before()    - adds before the node (outside)
    after()     - adds after the node (outside)
*/

let newButton = document.createElement("button");
newButton.innerHTML = "<b><i>After Div</i></b>";
let div4 = document.querySelector("div");
div4.after(newButton);

newButton.style.borderRadius = "5px";
newButton.style.height = "45px";
newButton.style.width = "120px";
newButton.style.backgroundColor = "yellow";
newButton.style.color = "red";
newButton.style.fontSize = "20px";

let newButton2 = document.createElement("button");
newButton2.innerHTML = "<b><i>Prepend Div</i></b>";
div4 = document.querySelector("div");
div4.prepend(newButton2);

let newButton3 = document.createElement("button");
newButton3.innerHTML = "<b><i>Append Div</i></b>";
div4 = document.querySelector("div");
div4.append(newButton3);

let newButton4 = document.createElement("button");
newButton4.innerHTML = "<b><i>before Div</i></b>";
div4 = document.querySelector("div");
div4.before(newButton4);
