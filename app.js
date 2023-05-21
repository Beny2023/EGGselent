
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var phoneInput = document.getElementById("phoneInput");
var input = document.getElementById("myInput");
var input1 = document.getElementById("input123");
var input12 = document.getElementById("input12");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
function clearInput() {
  if (input.value === "") {
      input.value = "";
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var inputField = document.querySelector('.mol.btn');
});
phoneInput.addEventListener("input", function() {
  var phoneNumber = phoneInput.value;
  var sanitizedNumber = phoneNumber.replace(/\D/g, "");
  phoneInput.value = sanitizedNumber;
});
function clearInput() {
  if (input1.value === "Ide Írjon...") {
      input1.value = "";
  }
}
function clearInput() {
  if (input12.value === "Ide Írjon...") {
      input12.value = "";
  }
}

