// Event Objects

let btn = document.querySelector("#handler");

/* btn.onclick = (evt) => {
  console.log(evt);
  console.log(evt.clientX, evt.clientY);
  console.log(evt.type);
  console.log(evt.target);
}; */

let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.clientX, evt.clientY);
  console.log(evt.type);
  console.log(evt.target);
};

// Event Listeners
/* 
    add event listeners
*/
btn.addEventListener("click", (evt) => {
  console.log("button was clicked");
  console.log(evt.target);
});

const handler1 = () => {
  console.log("handler 1");
};
const handler2 = () => {
  console.log("handler 2");
};
const handler3 = () => {
  console.log("handler 3");
};
const handler4 = () => {
  console.log("handler 4");
};

btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);
btn.addEventListener("click", handler3);
btn.addEventListener("click", handler4);

/* 
    remove event listeners
*/

btn.removeEventListener("click", handler3);
