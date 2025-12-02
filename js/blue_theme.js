document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const html = document.documentElement;
    const overlay = document.querySelector(".theme-overlay");
    const blueButton = document.querySelector(".blue-theme-button");

    if (blueButton) {
        blueButton.addEventListener("click", () => {
            body.classList.add("blue-theme");  // Apply blue theme to body
            html.classList.add("blue-theme");  // Apply blue theme to html
            overlay.style.display = "none";    // Hide the overlay after click
        });
    }

});
