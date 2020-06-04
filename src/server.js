const express = require("express")
const server = express()

//configurar pasta pública
server.use(express.static("public"))

//utilizando template engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos  da aplicação
//página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

//create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

//search-results
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)