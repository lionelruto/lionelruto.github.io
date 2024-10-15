//créer une redirection dynamique à tous les a contenant les réseaux sociaux
var resIcons = document.getElementById('resIcons');

// Parcourez chaque lien et ajoutez l'événement
resIcons.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        var nouvellePage = this.getAttribute('href');
        window.open(nouvellePage, '_blank');
    });
});