let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onIncrementBtn = (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};


const onDecrementBtn = (event) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};



decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);