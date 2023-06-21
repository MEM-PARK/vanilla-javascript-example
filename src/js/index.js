const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const handleClick = () => {
  const fontColor = h1.style.color;
  if (fontColor === "teal") {
    h1.style.color = "orange";
  } else {
    h1.style.color = "teal";
  }
};

button.addEventListener("click", handleClick);
