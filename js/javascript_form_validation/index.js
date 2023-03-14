const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameError = document.getElementById("user-error");
const passwordError = document.getElementById("pass-error");

function clearErrors() {
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
}

function validateForm() {
  clearErrors();

  let containErrors = false;

  if (!username.value) {
    usernameError.innerHTML = "Username is required";
    containErrors = true;
  }

  if (!password.value) {
    passwordError.innerHTML = "Password is required";
    containErrors = true;
  } else if (password.value.length < 8) {
    passwordError.innerHTML = "Password must be atleast 8 characters long";
    containErrors = true;
  } else if (!password.value.match(/[0-9]/)) {
    passwordError.innerHTML = "Password must contains atleast on digit";
    containErrors = true;
  }

  if (containErrors) return false;

  return true;
}
