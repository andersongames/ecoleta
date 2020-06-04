const express = require("express")
const server = express()

//configurar caminhos  da aplicação
//página inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//ligar o servidor
server.listen(3000)