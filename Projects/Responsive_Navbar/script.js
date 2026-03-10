const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener('click', function() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});