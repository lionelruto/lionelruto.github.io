//var i = 0;                  //  set your counter to 1

var anim= ["Lionel Mambingo", "Web developpeur", "Android developpeur", "QA testeur", "Lionel Mambingo"]
var animContent = document.createElement("p")
animContent.classList.add("animated_name")
var content = document.getElementById("animated_Content")

for (let i = 0; i < anim.length; i++) {
    setTimeout(function timer() {
        animContent.textContent=anim[i]; //  your code here
        content.appendChild(animContent)

        
    }, i * 4000);
  }

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


