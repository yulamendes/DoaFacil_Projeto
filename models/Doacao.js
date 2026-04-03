const db = require("../db")

const Doacao = db.sequelize.define('doadores', {
    nome_doador: {
        type: db.Sequelize.STRING
    },
    telefone_doador: {
        type: db.Sequelize.STRING
    },
    email_Doador: {
        type: db.Sequelize.STRING
    },
    kg_Alimento: {
        type: db.Sequelize.STRING
    }
})

Doacao.sync({ force: false })

module.exports = Doacao