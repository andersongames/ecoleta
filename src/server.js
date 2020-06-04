const express = require("express")
const server = express()

//configurar pasta pública
server.use(express.static("public"))

//configurar caminhos  da aplicação
//página inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//create-point
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

//ligar o servidor
server.listen(3000)