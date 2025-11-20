// ScrollReveal pour apparition des sections
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
