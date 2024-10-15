const express = require('express')
const path = require('path');
const app= express()
// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '..'))); //dirname c'est src/app donc on fait .. pour back
app.use(express.static(path.join(__dirname, '../public/dist')));
app.get('/fr', (req, res)=>{res.sendFile(path.join(__dirname, '../public/index.html'))})
app.get('/en', (req, res)=>{res.sendFile(path.join(__dirname, '../public/index.html'))})


const port= 4000

//app.use(express.static('public'))
app.listen(port, ()=>{
    console.log("The app is deploy in port 4000")
})