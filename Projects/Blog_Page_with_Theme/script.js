const button = document.getElementById("themeToggle");
const form = document.getElementById("newsletterForm");
const toast = document.getElementById("toast");

// Theme toggle
button.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Newsletter submit (no validation, just toast)
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Show toast
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000);

  form.reset();
});
