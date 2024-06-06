// Function to download the file
function downloadFile() {
    // Replace 'fileURL' with the URL of your file
    var fileURL = "./../../media/Cv_Mambingo_Astrid.pdf";
    
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

// Attach an event listener to the button with the id 'btncv'
document.getElementById('btncv').addEventListener('click', function() {
    // Call the downloadFile function when the button is clicked
    downloadFile();
});