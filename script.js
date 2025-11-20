// Apparition fluide des sections
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 120) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Console message
console.log("%cPortfolio d'Anton Micale chargé avec succès", "color:#9E1111; font-size:16px;");
