const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const password = document.querySelector('input[name="password"]');
  
  if (name.value === '') {
    alert('Name field is required.');
  }
  
  if (email.value === '') {
    alert('Email field is required.');
  } else if (!isValidEmail(email.value)) {
    alert('Invalid email format.');
  }
  
  if (password.value === '') {
    alert('Password field is required.');
  }
});

function isValidEmail(email) {
  // Perform email validation logic here
  // Return true if valid, false otherwise
}
