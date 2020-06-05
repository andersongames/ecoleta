const express = require("express")
const server = express()

//importa as rotas
const routes = require("./routes")

//importar o db
const db = require("./database/db")

//configurar pasta pública
server.use(express.static("public"))

//configurar as rotas
server.use(routes)

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//ligar o servidor
server.listen(3000)