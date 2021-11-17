const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(e) {
  alert("clicked!");
  console.log(e);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
