const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const handleClick = () => {
  h1.classList.toggle("teal");
};

button.addEventListener("click", handleClick);

const form = document.querySelector("#loginForm");
const formInput = document.querySelector("#loginForm input");
const welcome = document.querySelector("#welcome");

const handleFormClick = (event) => {
  event.preventDefault();
  if (formInput.value < 20) {
    alert("未成年者です。");
    return;
  }

  welcome.classList.remove("hidden");
  welcome.innerText = `あなたの年齢は ${formInput.value}です。`;
};

form.addEventListener("submit", handleFormClick);
