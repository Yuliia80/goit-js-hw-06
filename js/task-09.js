function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');


const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', changeColor);