// Animation d'apparition des sections
const sections = document.querySelectorAll('.section');

const reveal = () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 120) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Message d’accueil
window.onload = () => {
    console.log("Bienvenue sur le portfolio d'Anton !");
};
