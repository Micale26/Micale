// Script pour ajouter une fonctionnalité interactive (par exemple, une alerte ou une animation)
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('Bienvenue sur mon portfolio !');
    });
});
