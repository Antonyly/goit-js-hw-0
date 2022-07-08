const allCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:  ${allCategoriesEl.length}`);

const categoriesEl = document.querySelectorAll('#categories > li');
categoriesEl.forEach(el => {
    console.log(`Category: ${el.children[0].textContent}
Elements: ${el.children[1].children.length}`);
});