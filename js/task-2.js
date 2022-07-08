const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemsListEl = document.querySelector('#ingredients')
const makeItemsEl = ingredients.map(el => {
    let addEl = document.createElement('li');
    addEl.textContent = el;
    return addEl;
});
itemsListEl.append(...makeItemsEl);
console.log(itemsListEl);
