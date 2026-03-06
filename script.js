function toggleMenu(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  button.addEventListener("click", function () {
    button.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// Call function
toggleMenu("myButton", "myMenu");
