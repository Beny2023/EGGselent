const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
var icon = document.getElementById('myIcon');
var button = document.getElementById('myButton');

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    hamburger.classList.toggle('fa-solid fa-list')
    hamburger.classList.toggle('fa-solid fa-xmark')

})

hamburger.addEventListener('click', function (event) {
  hamburger.classList.toggle('fa-xmark');
});