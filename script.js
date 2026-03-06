const toggleBtn = document.getElementById('toggleNav');
const sideNav = document.getElementById('sideNav');

toggleBtn.addEventListener('click', function() {
  sideNav.classList.toggle('open');
});