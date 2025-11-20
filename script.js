// Apparition progressive des sections
const sections = document.querySelectorAll('.section');

function revealSections() {
    sections.forEach(section => {
        const pos = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (pos < screenHeight - 120) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);


// Message console (pro)
console.log("%cBienvenue sur le portfolio d'Anton Micale !", "color:#9E1111; font-size: 16px;");
