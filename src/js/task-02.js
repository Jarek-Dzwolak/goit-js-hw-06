const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

for (let elNewLi of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = elNewLi;
  listItem.classList.add("item");
  ingredientsList.append(listItem);
}
