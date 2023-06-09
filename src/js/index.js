const loginForm = document.querySelector("#login-form");

const onLoginBtnClick = (event) => {
  event.preventDefault();
  console.log(event.target);
};

loginForm.addEventListener("submit", onLoginBtnClick);
