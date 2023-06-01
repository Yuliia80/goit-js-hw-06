let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const clickIncrementBtn = (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};


const clickDecrementBtn = (event) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};



decrementBtn.addEventListener('click', clickDecrementBtn);
incrementBtn.addEventListener('click', clickIncrementBtn);