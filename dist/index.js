
const form = document.getElementById("form");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
// Select all input fields
const inputs = document.querySelectorAll(".input__field");

form.addEventListener("submit", function (event) {
  event.preventDefault();
/*   if (validateForm()) {   // if validation passes
    form.submit();        // submit normally (refresh)
  } */

  if (validateForm()) {
    window.location.reload(); // refresh the page
  }
});

// Add event listener to each input, so when input element is clicked, errors will be removed
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    clearError(input);
  });
});


const validateForm = () => {
  let isValid = true;

  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  clearError(fname);
  clearError(lname);
  clearError(email);
  clearError(password);

  if (!fnameValue) {
    highlight(fname, "First name cannot be empty");
    isValid = false;

  }

  if (!lnameValue) {
    highlight(lname, "Last name cannot be empty");
    isValid = false;

  }

  if (!emailValue) {
    highlight(email, "Email cannot be empty");
    isValid = false;

  } else if (!isEmail(emailValue)) {
    highlight(email, "Looks like this is not an email");
    isValid = false;

  }

  if (!passwordValue) {
    highlight(password, "Password cannot be empty");
    isValid = false;

  }

  return isValid;
}

function highlight(input, message) {
  const parent = input.parentElement;
  const msgDisplay = parent.querySelector(".error-msg");
  const iconDisplay = parent.querySelector(".input__icon");
  const fieldDisplay = parent.querySelector(".input__field");
  iconDisplay.classList.add('visible-icon');
  fieldDisplay.classList.add('form__field-error');
  msgDisplay.textContent = message;
}

function clearError(input) {
  const parent = input.parentElement;
  const msgDisplay = parent.querySelector(".error-msg");
  const iconDisplay = parent.querySelector(".input__icon");
  const fieldDisplay = parent.querySelector(".input__field");
  iconDisplay.classList.remove('visible-icon');
  fieldDisplay.classList.remove('form__field-error');
  msgDisplay.textContent = '';
}


// Email validation with regex
function isEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email);
}