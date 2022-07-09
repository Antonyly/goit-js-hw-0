

const decrementBtnEL = document.querySelector("[data-action='decrement']");
const incrementBtnEl = document.querySelector("[data-action='increment']");
const totalSpanEl = document.querySelector("#value");
let addValue = 0;

decrementBtnEL.addEventListener('click', () => {
    addValue -= 1;
    totalSpanEl.textContent = addValue;
});
incrementBtnEl.addEventListener('click', () => {
    addValue += 1;
    totalSpanEl.innerHTML = addValue;
});