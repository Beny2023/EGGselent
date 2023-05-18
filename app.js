const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
var icon = document.getElementById('myIcon');
var button = document.getElementById('myButton');
var phoneInput = document.getElementById("phoneInput");
var input = document.getElementById("myInput");

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    hamburger.classList.toggle('fa-solid fa-list')
    hamburger.classList.toggle('fa-solid fa-xmark')

})

hamburger.addEventListener('click', function (event) {
  hamburger.classList.toggle('fa-xmark');
});

phoneInput.addEventListener("input", function() {
    var phoneNumber = phoneInput.value;
    var sanitizedNumber = phoneNumber.replace(/\D/g, "");
    phoneInput.value = sanitizedNumber;
});

