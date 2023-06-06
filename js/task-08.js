const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', OnSubmit);

const profile = {};

function OnSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email;
  const password = event.target.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;
    console.log(profile);
  }
  
}

