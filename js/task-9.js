
const colorSpanEl = document.querySelector('.color');
const colorBtnEl = document.querySelector('.change-color');

colorBtnEl.addEventListener('click', () => {
    let hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;
    colorSpanEl.textContent = hexColor
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
      .padStart(6, 0)}`;
}