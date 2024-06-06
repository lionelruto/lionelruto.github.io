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

    // Fonction pour vérifier la taille de l'écran et afficher/cacher le conteneur en conséquence
    function adjustVisibility() {

        var container = document.getElementById('breadcumbs');
        var floatMenu = document.getElementById('floatingMenu')
        var newIcon = document.getElementById('icon')
        var imgLogo2 = document.getElementById('imgLogo2')
        if (window.innerWidth <= 1370) {

            container.style.visibility = 'visible'; // Rendre le conteneur visible si la taille de l'écran est supérieure ou égale à 768px
            floatMenu.style.visibility = 'hidden';
        } else {
            container.style.visibility = 'hidden'; // Rendre le conteneur invisible si la taille de l'écran est inférieure à 768px
            floatMenu.setAttribute("style", "width: 100px; border-radius: 15px; display: flex; flex-direction: column;justify-content: space-between;box-shadow: 2px 2px 15px #F2F2F2;background-color: $color-background; margin-left: 20px; position: absolute;top: 88px; right: 10px; visibility: visible;  padding: 15px;height: 75%; max-height: 75%; transform: scale(1);transition: transform 300ms;")
            newIcon.style.visibility = 'hidden';
            newIcon.style.display= 'none'

        }


    }

    // Appeler la fonction lors du chargement de la page et lors du redimensionnement de la fenêtre
    window.addEventListener('load', adjustVisibility);
    window.addEventListener('resize', adjustVisibility);
