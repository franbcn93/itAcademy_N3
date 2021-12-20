// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
// change name for firstName && lastName
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var email = document.querySelector(".email");
var address = document.querySelector(".address");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorNameLast = document.getElementById("errorNameLast");
var errorPhone = document.getElementById("errorPhone");
var errorEmail = document.getElementById("errorEmail");
var errorAddress = document.getElementById("errorAddress");

firstName.addEventListener("keyup", () => {
  validateName(firstName, errorName);
});

lastName.addEventListener("keyup", () => {
  validateName(lastName, errorNameLast);
});

phone.addEventListener("keyup", () => {
  validatePhone();
});

address.addEventListener("keyup", () => {
  validateAddress();
});

email.addEventListener("keyup", () => {
  emailValidate();
});

password.addEventListener("keyup", () => {
  passwordValidate();
});

// Exercise 8
// Validate fields entered by the user: name, phone, password, and email
function validate() {
  validatePhone();
  validateAddress();
  emailValidate();
  passwordValidate();
}
// La part del la valicació del NOM y del COGNOM
function validateName(name, error) {
  if (name.value.length < 3) {
    setError(error, "Minimum 3 characters", "red");
  } else if (!allLetter(name.value)) {
    setError(error, "Invalid numbers!!", "red");
  } else {
    setError(error, "Valid Name", "black");
  }
}

// La part del la valicació del TELÉFON
function validatePhone() {
  if (phone.value.length < 3) {
    setError(errorPhone, "Minimum 3 characters", "red");
  } else if (!validatePhoneNumber(phone.value)) {
    setError(errorPhone, "Invalid phone number!!", "red");
  } else {
    setError(errorPhone, "Correct number", "black");
  }
}

// Validació del EMAIL
function emailValidate() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {
    setError(errorEmail, "Valid Email", "black");
  } else {
    setError(errorEmail, "Email invalid!!", "red");
  }
}

// La part del la valicació del LA ADREÇA
function validateAddress() {
  if (address.value.length < 3) {
    setError(errorAddress, "Minimum 3 characters", "red");
  } else {
    setError(errorAddress, "Correct", "black");
  }
}

// To check a password between 6 to 8 characters which contain
// only characters, numeric digits, underscore and first character
// must be a letter
function passwordValidate() {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passw)) {
    setError(errorPassword, "Valid Password", "black");
  } else {
    setError(
      errorPassword,
      "Must contain only characters, numeric digits, " +
        "underscore and first character must be a letter",
      "red"
    );
  }
}

// This function will allow phone numbers entered in the formats with 9 digits
function validatePhoneNumber(value) {
  return value.match(/\d/g).length === 9;
}

const isNotEmpty = function (valor) {
  return valor.length != 0;
};

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.match(letters)) {
    return true;
  } else {
    return false;
  }
}

// Modifiquem l'estil del resultat
const setError = function (error, text, color) {
  error.innerHTML = text;
  error.style.display = "block";
  error.style.color = color;
  return false;
};
