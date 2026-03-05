const loadBtn = document.getElementById("loadBtn");
const spinner = document.getElementById("spinner");

loadBtn.addEventListener("click", function () {
  // Show spinner
  spinner.classList.remove("hidden");

  // After 3 seconds, hide spinner and show alert
  setTimeout(function () {
    spinner.classList.add("hidden");
    alert("Data loaded successfully!");
  }, 3000);
});