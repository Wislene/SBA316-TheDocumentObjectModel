window.onload = function () {
  alert(`You are using ${navigator.appName} version ${navigator.appVersion}`);

  console.log(`Your screen dimensions are ${screen.width}x${screen.height}`);
  const app = document.getElementById("app");
  const navbar = document.getElementById("navbar-id");

  let container = document.createElement("div");
  container.id = "container";

  // Title
  let title = document.createElement("h1");
  title.textContent = "Welcome to Freedom Dance Studio's Grand Opening";
  title.classList.add("title");
  title.style.textAlign = "center";
  title.style.backgroundColor = "blue";

  container.appendChild(title);

  // Welcome message
  let welcome = document.createElement("p");
  welcome.textContent = `We are giving away first three classes for FREE! Register and fill out the registration form so you can receive your free classes.  In the ancient times, dancers moved to the rhythm of nature. The Freedom Dance Studio was founded to keep these traditions alive.
  Modern dance now incorporates these ancient movements. Each dance class here begins with a story of the dance's origin.`;
  welcome.classList.add("welcome");

  container.appendChild(welcome);

  app.insertBefore(container, app.firstChild);

  let message = document.createElement("p");
  message.id = "message";
  app.appendChild(message);

  // Form and validation
  var myForm = document.querySelector("#formregistration");
  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");
  const phoneNumber = document.getElementById("phonenumber");
  const classSelect = document.getElementById("classselect");
  const errorElement = document.getElementById("errorDisplay");

  // Clear error on focus
  [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    classSelect,
  ].forEach((input) => {
    input.addEventListener("focus", () => {
      clearError(input);
    });
  });

  // Validation rules
  myForm.addEventListener("submit", function (event) {
    let messages = [];

    if (firstName.value === "" || firstName.value == null) {
      messages.push("Please enter your first name");
      setError(firstName, "First Name cannot be empty");
    } else if (firstName.value.length < 2 || firstName.value.length > 20) {
      messages.push("First Name must be between 2 and 20 characters");
      setError(firstName, "First Name must be between 2 and 20 characters");
    } else {
      setSuccess(firstName);
    }

    if (lastName.value === "" || lastName.value == null) {
      messages.push("Please enter your last name");
      setError(lastName, "Last Name cannot be empty");
    } else if (lastName.value.length < 2 || lastName.value.length > 20) {
      messages.push("Last Name must be between 2 and 20 characters");
      setError(lastName, "Last Name must be between 2 and 20 characters");
    } else {
      setSuccess(lastName);
    }

    if (email.value === "" || email.value == null) {
      messages.push("Please enter your email");
      setError(email, "Email cannot be empty");
    } else if (!isEmailValid(email.value)) {
      messages.push("Please enter a valid email");
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }

    if (password.value.length < 6 || password.value.length > 20) {
      messages.push("Password must be between 6 and 20 characters");
      setError(password, "Password must be between 6 and 20 characters");
    } else {
      setSuccess(password);
    }

    if (password.value !== confirmPassword.value) {
      messages.push("Passwords do not match");
      setError(confirmPassword, "Passwords do not match");
    } else {
      setSuccess(confirmPassword);
    }

    if (phoneNumber.value === "" || phoneNumber.value == null) {
      messages.push("Please enter your phone number");
      setError(phoneNumber, "Phone Number cannot be empty");
    } else if (!isPhoneNumberValid(phoneNumber.value)) {
      messages.push("Please enter a valid phone number");
      setError(phoneNumber, "Provide a valid phone number");
    } else {
      setSuccess(phoneNumber);
    }

    if (classSelect.value === "") {
      messages.push("Please select a class");
      setError(classSelect, "Please select a class");
    } else {
      setSuccess(classSelect);
    }

    alert(messages.length);
    if (messages.length > 0) {
      alert(messages);
      event.preventDefault();
      errorElement.textContent = messages.join(", ");
    } else {
      clearErrors();
    }
  });

  function setError(element, message) {
    const parent = element.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    errorMessage.textContent = message;
    parent.classList.add("error");
    parent.classList.remove("success");
  }

  function setSuccess(element) {
    const parent = element.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    errorMessage.textContent = "";
    parent.classList.add("success");
    parent.classList.remove("error");
  }

  function clearError(element) {
    const parent = element.parentElement;
    const errorMessage = parent.querySelector(".error-message");

    // errorMessage.textContent = "";

    parent.classList.remove("error");
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach(function (element) {
      element.classList.remove("error");
      const errorMessage = element.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.textContent = "";
      }
    });
  }

  function isEmailValid(email) {
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
  }

  function isPhoneNumberValid(phoneNumber) {
    const reg = /^\d{10}$/;
    return reg.test(phoneNumber);
  }
};
