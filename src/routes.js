//TESTE COM ROTAS

//importa somente o módulo de rotas do express
const { Router } = require("express")
const routes = Router()

const express = require("express")
//const routes = express()

//importar o db
const db = require("./database/db")

//habilitar o uso do req.body
routes.use(express.urlencoded({ extended: true }))

//configurar caminhos da aplicação
//página inicial
routes.get("/", (req, res) => {
    return res.render("index.html")
})

//create-point
routes.get("/create-point", (req, res) => {
    
    //req.query: query strings da url
    //console.log(req.query)

    return res.render("create-point.html")
})

routes.post("/savepoint", (req, res) => {

    //req.body: o corpo do formulário
    //console.log(req.body)

    //inserir dados no banco de dados
        //2. inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
]

    function afterInsertData(err) {
        if(err) {
            //console.log(err)
            return res.render("create-point.html", { error: true })
        }

        //console.log("Cadastrado com sucesso")
        //console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

//search-results
routes.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
            //mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { total: 0 })
    }

    //pegar os dados ddo banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        console.log("Aqui estão seus registros: ")
        console.log(rows)
        
        //mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})

module.exports = routes