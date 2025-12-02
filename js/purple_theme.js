document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const html = document.documentElement;
    const overlay = document.querySelector(".theme-overlay");
    const purpleButton = document.querySelector(".purple-theme-button");

    if (purpleButton) {
        purpleButton.addEventListener("click", () => {
            body.classList.add("purple-theme");  // Apply purple theme to body
            html.classList.add("purple-theme");  // Apply purple theme to html
            overlay.style.display = "none";    // Hide the overlay after click
        });
    }
});