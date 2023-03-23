function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanText = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  const Color = getRandomHexColor();
  document.body.style.backgroundColor = Color;
  spanText.textContent = Color;
});
