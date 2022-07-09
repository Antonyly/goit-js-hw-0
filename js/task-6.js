const validInputEl = document.querySelector("#validation-input");
const validValueEl = validInputEl.dataset.length;

validInputEl.addEventListener('blur', () => {
    if (validInputEl.value.length === Number(validValueEl)) {
          validInputEl.classList.add("valid")
          validInputEl.classList.remove("invalid");
     } else {
          validInputEl.classList.add("invalid");
          validInputEl.classList.remove("valid");
    }
});

