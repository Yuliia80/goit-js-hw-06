const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
  if (event.target.value === '') { 
  spanEl.textContent = 'Anonymous'}
  else {spanEl.textContent = event.target.value.trim()};
  
});


