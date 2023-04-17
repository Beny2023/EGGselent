const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
 var icon = document.getElementById('myIcon');
var button = document.getElementById('myButton');

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    hamburger.classList.toggle('fa-solid fa-list')
    hamburger.classList.toggle('fa-solid fa-xmark')

})
button.addEventListener("click", function(){
    if (icon.classList.contains("fa-solid fa-list")){
        icon.classList.remove("fa-solid fa-list");
        icon.classList.add("fa-solid fa-xmark");
    } else {
        icon.classList.remove("fa-solid fa-xmark");
        icon.classList.add("fa-solid fa-list");
    }
});
