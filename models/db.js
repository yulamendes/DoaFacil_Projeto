const Sequelize = require("sequelize")

const sequelize = new Sequelize('doacao', 'mariana', '757598', {
    host: 'localhost',
    dialect: 'mysql' //mariadb, postgres...outros
});

module.exports={
	Sequelize: Sequelize,
	sequelize: sequelize
}