const elResult = document.getElementById("value");
const elButtonPLus = document.querySelector('[data-action="increment"]');
const elButtonsMinus = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

elButtonPLus.addEventListener("click", () => {
  counterValue++;
  elResult.textContent = counterValue;
});
elButtonsMinus.addEventListener("click", () => {
  counterValue--;
  elResult.textContent = counterValue;
});
