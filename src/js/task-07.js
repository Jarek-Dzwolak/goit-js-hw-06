const myslider = document.getElementById("font-size-control");
const mySpan = document.getElementById("text");

console.log(myslider);
myslider.addEventListener("input", function () {
  let size = myslider.value;
  mySpan.style.fontSize = size + "px";
});
