function validateEmail(inputId, errorId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  inputElement.addEventListener('input', function() {
    const emailValue = this.value;
    let hasAtSign = false;

    for (const char of emailValue) {
      if (char === "@") {
        hasAtSign = true;
        break;
      };
    };

    if (!hasAtSign) {
      errorElement.textContent = "Please enter a valid email address"
      errorElement.style.color = "red";

    } else {
      errorElement.textContent = "Looks good!";
      errorElement.style.color = "green";
      
    };

  });
};

// Initialize validation
validateEmail('email', 'emailError');