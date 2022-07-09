const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener('focus', event => {
    event.target.style.border = '3px solid teal';
});
inputEl.addEventListener('blur', event => {
    event.target.style.border = '3px solid green';
});
inputEl.addEventListener('input', event => {
    spanEl.innerHTML = event.target.value;
});