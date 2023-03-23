const myInput = document.getElementById("name-input");
const myOutput = document.getElementById("name-output");

myInput.addEventListener("input", (event) => {
  myOutput.textContent = event.currentTarget.value;
});
