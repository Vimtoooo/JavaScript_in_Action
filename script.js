function openModal(modalId) {
  // Show the overlay
  document.getElementById("overlay").style.display = "block";
  
  // Show the modal
  document.getElementById(modalId).style.display = "block";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
}