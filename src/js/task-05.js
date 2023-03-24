const myInput = document.getElementById("name-input");
const myOutput = document.getElementById("name-output");

myInput.addEventListener("input", (event) => {
  event.currentTarget.value
    ? (myOutput.textContent = event.currentTarget.value)
    : (myOutput.textContent = "Anonymous");
});
