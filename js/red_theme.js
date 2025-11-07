document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const overlay = document.querySelector(".theme-overlay");
    const redButton = document.querySelector(".red-theme-button");

    if (redButton) {
        redButton.addEventListener("click", () => {
            body.classList.add("red-theme");   // Apply red theme to body
            overlay.style.display = "none";    // Hide the overlay after click
        });
    }
});
