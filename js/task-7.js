const controlEl = document.querySelector("#font-size-control");
const controlFontEl = document.querySelector("#text");
controlEl.addEventListener('input', event => {
    controlFontEl.style.fontSize = event.target.value + 'px';
});