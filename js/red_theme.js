document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const html = document.documentElement;
    const overlay = document.querySelector(".theme-overlay");
    const redButton = document.querySelector(".red-theme-button");

    if (redButton) {
        redButton.addEventListener("click", () => {
            body.classList.add("red-theme");   // Apply red theme to body
            html.classList.add("red-theme");   // Apply red theme to html
            overlay.style.display = "none";    // Hide the overlay after click
        });
    }
});