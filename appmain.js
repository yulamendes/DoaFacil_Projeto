const express = require("express");
const app = express();
const {engine} = require ("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment')
const doacao = require ("./models/doacao");
app.engine('handlebars', engine({
	defaultLayout: 'main',
	helpers:{
		formatDate:(date) =>{
			return moment(date).format('DD/MM/YYYY')
		}
	}
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'));

app.get("/doacao", function(req, res){
	doacao.findAll({order: [['id', 'Asc']]}).then(function(doacao){
		res.render('doacao', {doacao: doacao});
	})	
});
app.get("/cad-doacao", function(req, res){
	res.render("cad_doacao");
});
app.post("/add-doacao", function(req, res){
	doacao.create({
		nome: req.body.nome,
		quantidade: req.body.quantidade,
	}).then(function(){
		res.redirect('/doacao')
		//res.send("Doação cadastrada com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento da doação!" + erro)
	})
});
app.get('/del-doacao/:id', function(req, res){
	doacao.destroy({
		where: {'id': req.params.id}
	}).then(function(){
		res.redirect('/doacao')
		//res.send("Doação excluída com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão da doação")
	})
})

// Rota GET — abre o formulário de edição com os dados da doação
app.get('/editar-doacao/:id', function(req, res) {
    doacao.findOne({
        where: { 'id': req.params.id }
    }).then(function(doacao) {
        res.render('editar_doacao', { doacao: doacao })
    }).catch(function(erro) {
        res.send("Erro ao buscar doação: " + erro)
    })
})

// Rota POST — salva as alterações no banco
app.post('/update-doacao', function(req, res) {
    	doacao.update({
        nome:       req.body.nome,
        quantidade: req.body.quantidade,
        descricao:  req.body.descricao,
        fornecedor: req.body.fornecedor,
        email:      req.body.email,
        telefone:   req.body.telefone
    }, {
        where: { 'id': req.body.id }
    }).then(function() {
        res.redirect('/doacao')
    }).catch(function(erro) {
        res.send("Erro ao atualizar a doação: " + erro)
    })
})

app.listen(8090);
console.log("Servidor rodando em http://localhost:8090")