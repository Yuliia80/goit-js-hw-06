const inputEl = document.querySelector('#validation-input');

function onBlurBorderColor(event) {
    const inputValue = inputEl.getAttribute('data-length');
    
    if (inputEl.value.length === Number(inputValue)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length !== Number(inputValue) && inputEl.value.length !== 0) {
        inputEl.classList.add('invalid');
    }
}

inputEl.addEventListener('blur', onBlurBorderColor);

