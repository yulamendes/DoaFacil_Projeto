const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Doacao@localhost',          // seu usuário do MySQL Workbench
  password: '757598', // sua senha do MySQL Workbench
  database: 'doafacil'   // nome do banco que você vai criar
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;