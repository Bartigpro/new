const express = require("express")

const cors = require("cors")

const app = express()

var port = 3000

var tab = [{imie: "Bartosz", nazwisko: "Gańko"}]

app.use(cors())

app.get("/", function(req, res){

    res.send("siema")
})

app.get("/add/:imie/:nazwisko", function(req, res){

    const imie = req.params.imie
    const nazwisko = req.params.nazwisko




    console.log(`imie: ${imie}, nazwisko: ${nazwisko}`)
    console.log("izi bobi")
    
})



app.listen(port)