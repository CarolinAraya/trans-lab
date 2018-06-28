
const signinButton = document.getElementById("signin-button");
const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("password-input");

signinButton.addEventListener("click", () => {
  window.loadData('666', data => {

    render();
  });
});

let render = () => {

};