const myForm = document.querySelector(".login-form");
console.log(myForm);
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please fill in all the fields!");
  }
  const MYemail = document.querySelector("[name='email']").value;
  const MYpassword = document.querySelector("[name='password']").value;
  const data = { email: MYemail, password: MYpassword };
  event.currentTarget.reset();
  console.log(data);
}
