//importar a dependência do aqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de daddos pra as operações
db.serialize(() => {

    //com comandos sql eu vou:
    //1. criar uma tabela
/*
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

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
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis, Papelão"
]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }


    //db.run(query, values, afterInsertData)
*/
    //3. consultar os dados dad tabela
    /*
    db.all(`SELECT name FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
    */
/*
    //4. deletar um dado da tabela
    for(i = 6; i < 45; i++) {
        db.run(`DELETE FROM places WHERE id = ?`, [`${i}`], function(err) {
            if(err) {
                return console.log(err)
            }
    
            console.log("Registro deletado com sucesso")
        })
    }
    */
})