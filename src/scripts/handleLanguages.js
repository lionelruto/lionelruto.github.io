const url = window.location.href;
const host = window.location.hostname
const selected = document.getElementById('lang');

// Si l'URL se termine par '/en' ou '/fr', mettre le select sur 'en' ou 'fr'
function switchToEnglish (){
    if (url.endsWith('/en')) {
        selected.value = "en";
    } else if (url.endsWith('/fr')) {
        selected.value = "fr";
    } else {
        // Si l'URL ne contient ni '/fr' ni '/en', définir une valeur par défaut (français)
        selected.value = "fr";
    }
}

// Vérifier la valeur sélectionnée et mettre à jour l'URL si nécessaire
function changeUrlBasedOnSelectInput(){
    selected.addEventListener('change', function() {
        const selectedValue = selected.value;
        
        // Construire la nouvelle URL en fonction de la langue sélectionnée
        let newUrl;
        if (!url.endsWith('/' + selectedValue)) {
            // S'assurer que l'URL ne se termine pas déjà par la langue sélectionnée
            if (url.endsWith('/')) {
                newUrl = url + selectedValue;
            } else {
                newUrl = 'http://' + host + ':4000/' + selectedValue;
                console.log(newUrl)
            }

            // Mettre à jour l'URL et recharger la page
            window.location.href =  newUrl;
            console.log(`URL mise à jour : ${newUrl}`);             
        }
    });
}

switchToEnglish()
changeUrlBasedOnSelectInput()
