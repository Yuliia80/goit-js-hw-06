const categoriesEl = document.querySelector('ul#categories');
const numberEl = categoriesEl.children.length;
console.log(`Number of categories: ${numberEl}`);

const titlesEl = document.querySelectorAll('h2');
titlesEl.forEach(function (title) {
    console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${title.nextElementSibling.children.length}`);
});
