const elAllCategory = document.querySelectorAll(".item");
console.log(`Number of categories:${elAllCategory.length}`);
for (const element of elAllCategory) {
  console.log(`Category: ${element.children[0].innerText}`);

  console.log(`Elements: ${element.children[1].children.length}`);
}
