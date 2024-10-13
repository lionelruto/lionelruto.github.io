
var fileURL = "";
// Function to download the file
function downloadFile() {    
    // Create a temporary anchor element
    var downloadLink = document.createElement('a');
    
    // Set the download link's href attribute to the file URL
    downloadLink.href = fileURL;
    
    // Set the download attribute to force the browser to download the file instead of navigating to it
    downloadLink.setAttribute('download', '');

    // Append the download link to the body
    document.body.appendChild(downloadLink);
    
    // Simulate a click on the download link
    downloadLink.click();
    
    // Remove the download link from the body
    document.body.removeChild(downloadLink);
}

//Pour récupérer le lien du cv en fonction de la langue
const recupCV = async ()=>{
    window.addEventListener('DOMContentLoaded', function() {
        // Déclencher manuellement l'événement de changement de langue au chargement de la page
        var selectElement = document.getElementById('lang');
        var event = new Event('change');
        selectElement.dispatchEvent(event);
    
    
    });
    // Replace 'fileURL' with the URL of your file
   await document.getElementById('lang').addEventListener('change', function(){
       var selected= document.getElementById('lang');
       var selectedValue= selected.options[selected.selectedIndex].value;
    
       switch(selectedValue){
    
        case "fr": 
            fileURL = "./../../media/Astrid_Moutome_CV_fr.pdf";
            break;
        case "en": 
            fileURL = "./../../media/Astrid_Moutome_CV-EN.pdf";
            break;
       } 
    })
    
    //console.log("fileURL")
}

recupCV();

// Attach an event listener to the button with the id 'btncv'
document.getElementById('btncv').addEventListener('click', function() {
    // Call the downloadFile function when the button is clicked
    downloadFile();
});