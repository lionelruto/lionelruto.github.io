const express = require('express')
const path = require('path');
const app= express()
// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
const port= 3500

//app.use(express.static('public'))
app.listen(port, ()=>{
    console.log("The app is deploy in port 3500")
})