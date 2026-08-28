// create toggle button that changes the screen to dark mode when clicked and light mode when clicked again

let toggleSwitch = document.querySelector("#toggleButton");
let body = document.querySelector("body");
let currentMode = "light";

toggleSwitch.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    toggleSwitch.innerText = "Dark Mode";
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    toggleSwitch.innerText = "Light Mode";
  }
});
