function validateName() {
  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameError");

  // Reset error
  nameError.textContent = "";

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name should be greater than 3 characters.";
  }
}

function validatePassword() {
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");

  // Reset error
  passwordError.textContent = "";

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Your password is weak.";
  }
}

function validateForm() {
  // Run both validations when submit is clicked
  validateName();
  validatePassword();
}

function togglePassword() {
  let passwordInput = document.getElementById("password");
  let toggleBtn = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
}