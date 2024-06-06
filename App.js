const express = require('express')
const app= express()

const port= 3500

app.use(express.static('public'))
app.listen(port, ()=>{
    console.log("The app is deploy in port 3500")
})