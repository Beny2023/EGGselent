const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const teszt = document.getElementById('test');

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    hamburger.classList.toggle('fa-solid fa-list')
    hamburger.classList.toggle('fa-solid fa-xmark')

})
