const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Password strength indicator
passwordInput.addEventListener("input", () => {
  checkPasswordStrength(passwordInput.value);
});

function checkPasswordStrength(password) {
  const strengthBar = document.querySelector(".strengthBar");
  const strengthText = document.querySelector(".strengthText");
  const passwordStrengthContainer = document.querySelector(".passwordStrength");

  if (password.length > 0) {
    passwordStrengthContainer.style.display = "block";
  } else {
    passwordStrengthContainer.style.display = "none";
    strengthBar.className = "strengthBar";
    strengthText.className = "strengthText";
    strengthText.innerText = "";
    return;
  }

  let strength = 0;

  // Check password length
  if (password.length >= 8) strength++;

  // Check for lowercase letters
  if (/[a-z]/.test(password)) strength++;

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) strength++;

  // Check for numbers
  if (/[0-9]/.test(password)) strength++;

  // Check for special characters
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Determine strength level
  if (strength <= 2) {
    strengthBar.className = "strengthBar weak";
    strengthText.className = "strengthText weak";
    strengthText.innerText = "Weak";
  } else if (strength <= 4) {
    strengthBar.className = "strengthBar medium";
    strengthText.className = "strengthText medium";
    strengthText.innerText = "Medium";
  } else {
    strengthBar.className = "strengthBar strong";
    strengthText.className = "strengthText strong";
    strengthText.innerText = "Strong";
  }
}

// form.addEventListener("focusout", (e) => {
//   [
//     nameInput,
//     emailInput,
//     phoneInput,
//     passwordInput,
//     confirmPasswordInput,
//   ].forEach((input) => {
//     if (e.target === input) {
//       validateInputs();
//     }
//   });
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

  const errorIndicators = document.querySelectorAll(".error");
  const isSuccess = [...errorIndicators].every(
    (error) => error.innerText === "",
  );

  if (isSuccess) {
    const alertBox = document.querySelector(".alert");
    alertBox.style.top = "20px";
    setTimeout(() => {
      alertBox.style.top = "-200px";
      alertBox.style.transition = "top 0.5s ease-out";
    }, 3000);
    form.reset();

    errorIndicators.forEach((error) => (error.innerText = ""));
    const strengthBar = document.querySelector(".strengthBar");
    const strengthText = document.querySelector(".strengthText");
    const passwordStrengthContainer =
      document.querySelector(".passwordStrength");
    passwordStrengthContainer.style.display = "none";
    strengthBar.className = "strengthBar";
    strengthText.className = "strengthText";
    strengthText.innerText = "";
  }
});

// Validate inputs function
function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (nameValue === "") {
    setError(nameInput, "Name is required");
  } else {
    setSuccess(nameInput);
  }

  if (emailValue === "") {
    setError(emailInput, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Provide a valid email");
  } else {
    setSuccess(emailInput);
  }

  if (passwordValue.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
  } else {
    setSuccess(passwordInput);
  }

  if (phoneValue === "") {
    setError(phoneInput, "Phone number is required");
  } else if (!isValidPhone(phoneValue)) {
    setError(phoneInput, "Provide a valid phone number");
  } else {
    setSuccess(phoneInput);
  }

  if (confirmPasswordValue !== passwordValue) {
    setError(confirmPasswordInput, "Passwords do not match");
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(input, message) {
  const parentElement = input.parentElement;
  const error = parentElement.querySelector(".error");
  error.innerText = message;
}

function setSuccess(input) {
  const parentElement = input.parentElement;
  const error = parentElement.querySelector(".error");
  error.innerText = "";
}

// email validation check
function isValidEmail(email) {
  const check =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return check.test(email);
}

// phone number validation check (11 digits)
function isValidPhone(phone) {
  const check = /^\d{11}$/;
  return check.test(phone);
}
