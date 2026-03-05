const form = document.getElementById('myForm');
const toast = document.getElementById('toast');

form.addEventListener("submit", function() {
  event.preventDefault();
  toast.classList.remove("hidden");
  toast.classList.add("show");
});