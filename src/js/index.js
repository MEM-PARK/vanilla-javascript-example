const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const handleClick = () => {
  h1.classList.toggle("teal");
};

button.addEventListener("click", handleClick);

const formInput = document.querySelector("#loginForm input");
const formBtn = document.querySelector("#loginForm button");

const handleFormClick = (event) => {
  event.preventDefault();
  if (formInput.value === "") {
    alert("値がありません。");
    return false;
  } else if (formInput.value <= 20) {
    alert("未成年者です。");
    return false;
  }
};

formBtn.addEventListener("click", handleFormClick);
