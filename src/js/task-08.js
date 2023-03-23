const myForm = document.querySelector(".login-form");
console.log(myForm);
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");
  }
}
