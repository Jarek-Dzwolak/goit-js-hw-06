const myInput = document.getElementById("validation-input");
console.log(myInput);

myInput.addEventListener("blur", () => {
  if (myInput.value.length === 6) {
    myInput.className = "valid";
  } else myInput.className = "invalid";
});
