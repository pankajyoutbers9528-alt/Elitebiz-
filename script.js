
/* =================================
   ELITEBIZ - CAMPUS CONNECT
   Website JavaScript
================================= */

// Current Year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Registration Form Scroll
function openRegister(role) {
  const roleField = document.getElementById("role");
  const registerSection = document.getElementById("register");

  if (roleField) {
    roleField.value = role;
  }

  if (registerSection) {
    registerSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Registration Demo
function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const role = document.getElementById("role");

  if (!name || !email || !role) {
    alert("Registration form is incomplete.");
    return;
  }

  if (!name.value.trim() || !email.value.trim() || !role.value) {
    alert("Please fill all required fields.");
    return;
  }

  alert(
    "Thank you, " + name.value +
    "! Your " + role.value +
    " registration demo is working. " +
    "Real account creation will be added with the backend."
  );

  name.value = "";
  email.value = "";
  role.value = "";
}
