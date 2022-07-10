const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener('input', event => {
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if (inputEl.value === '') {
        spanEl.textContent = 'Anonymous'
    } else {
        spanEl.textContent = event.target.value;
    }
});