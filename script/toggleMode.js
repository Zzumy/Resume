const themeToggles = document.querySelectorAll(".theme-toggle");
const body = document.body;

function updateThemeIcons() {
  const isDarkMode = body.classList.contains("dark-mode");

  themeToggles.forEach((toggle) => {
    const icon = toggle.querySelector(".theme-icon");

    if (!icon) return;

    if (isDarkMode) {
      icon.src = "./css/assets/moon.png";
      icon.alt = "Dark mode";
    } else {
      icon.src = "./css/assets/sun.png";
      icon.alt = "Light mode";
    }
  });
}

function toggleMode() {
  body.classList.toggle("dark-mode");
  updateThemeIcons();
}

function initThemeToggle() {
  document.querySelectorAll(".theme-toggle").forEach((toggle) => {
    toggle.addEventListener("click", toggleMode);

    toggle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMode();
      }
    });
  });

  updateThemeIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}
