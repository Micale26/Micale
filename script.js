// Apparition des éléments au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".content").forEach((section) => {
  observer.observe(section);
});

// Smooth scroll navbar (déjà géré par CSS mais plus fluide en JS)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: "smooth"
    });
  });
});
