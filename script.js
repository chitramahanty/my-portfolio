
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");
const themeBtn = document.getElementById("themeBtn");

let clicked = false;

button.addEventListener("click", function() {
    if (clicked === false) {
        message.textContent = "Welcome to my portfolio!";
        button.textContent = "Thank You!";
        clicked = true;
    } else {
        message.textContent = "Thanks for visiting!";
        button.textContent = "Say Hello!";
        clicked = false;
    }
});

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});


