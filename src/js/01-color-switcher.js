const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStop.setAttribute('disabled', '');
function toggleButtons() {
  buttonStart.toggleAttribute('disabled');
  buttonStop.toggleAttribute('disabled');
}

function changeColor() {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
}

buttonStart.addEventListener('click', () => {
  toggleButtons();
  intervalId = setInterval(changeColor, 1000);
});

buttonStop.addEventListener('click', () => {
  toggleButtons();
  clearInterval(intervalId);
});


