const logos = document.querySelectorAll(".logo");
const body = document.body;

function toggleMode() {
    body.classList.toggle("dark-mode");
    logos.forEach((logo) => logo.classList.toggle("dark-mode-logo"));
}

logos.forEach((logo) => logo.addEventListener("click", toggleMode));
