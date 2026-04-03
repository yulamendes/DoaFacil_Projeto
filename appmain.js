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
        nome_doador:     req.body.nome_doador,
        telefone_doador: req.body.telefone_doador,
        email_Doador:    req.body.email_Doador,
        kg_Alimento:     req.body.kg_Alimento,
    }).then(function(){
        res.redirect('/doacao')
    }).catch(function(erro){
        res.send("Erro ao realizar o cadastramento da doação!" + erro)
    })
});

app.get('/del-doacao/:id', function(req, res){
    doacao.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/doacao')
    }).catch(function(erro){
        res.send("Erro ao realizar a exclusão da doação")
    })
})

app.get('/editar-doacao/:id', function(req, res) {
    doacao.findOne({
        where: { 'id': req.params.id }
    }).then(function(doacao) {
        res.render('editar_doacao', { doacao: doacao })
    }).catch(function(erro) {
        res.send("Erro ao buscar doação: " + erro)
    })
})

app.post('/update-doacao', function(req, res) {
    doacao.update({
        nome_doador:     req.body.nome_doador,
        telefone_doador: req.body.telefone_doador,
        email_Doador:    req.body.email_Doador,
        kg_Alimento:     req.body.kg_Alimento,
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