const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginMsg = document.getElementById("loginMsg");

loginBtn.addEventListener('click', function() {
    // event.preventDefault();
    const passwordValue = passwordInput.value;
    
    if (passwordValue === "admin123") {
        loginMsg.textContent = "Logged in successfully!";
        loginMsg.classList.add("success");
    } else {
        loginMsg.textContent = "Invalid password";
        loginMsg.classList.add("error");
    }
})