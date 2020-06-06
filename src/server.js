const express = require("express")
const server = express()

//importa as rotas
const routes = require("./routes")

//importar o db
const db = require("./database/db")

//configurar pasta pública
server.use(express.static("public"))

//configurar as rotas/
server.use(routes)
/*
//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
    //página inicial
    server.get("/", (req, res) => {
        return res.render("index.html")
    })
    
        //create-point
    server.get("/create-point", (req, res) => {
        
        //req.query: query strings da url
        //console.log(req.query)
    
        return res.render("create-point.html")
    })
    
    server.post("/savepoint", (req, res) => {
    
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
                console.log(err)
                return res.send("Erro no cadastro")
            }
    
            console.log("Cadastrado com sucesso")
            console.log(this)
    
            return res.render("create-point.html", { saved: true })
        }
    
        db.run(query, values, afterInsertData)
    })
    
        //search-results
    server.get("/search", (req, res) => {
    
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
*/
//ligar o servidor
server.listen(process.env.PORT ||  3000)