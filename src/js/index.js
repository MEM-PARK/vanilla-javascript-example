const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const handleClick = () => {
  h1.classList.toggle("teal");
};

button.addEventListener("click", handleClick);
