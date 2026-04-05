const Sequelize = require("sequelize")

const sequelize = new Sequelize('Doacao', 'root', '147825', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}