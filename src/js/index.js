const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function handleClick() {
  h1.classList.toggle("colorToOrange");
}

button.addEventListener("click", handleClick);
