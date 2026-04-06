# 🍽️ DoaFácil — Plataforma de Doação de Alimentos

Projeto desenvolvido na disciplina de **Frameworks Back-End**, com o objetivo de conectar doadores de alimentos a pessoas em situação de vulnerabilidade, contribuindo com a **ODS 2 — Fome Zero e Agricultura Sustentável**.

---

## 📌 Sobre o Projeto

O **DoaFácil** é uma aplicação web com arquitetura **MVC**, que permite o cadastro, visualização, edição e exclusão de doações de alimentos.

A plataforma foi desenvolvida utilizando tecnologias modernas de back-end, com foco em boas práticas de desenvolvimento e integração com banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Express-Handlebars
- Body-Parser
- Moment.js
- Nodemon
- Git & GitHub

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)**:
DoaFacil_Projeto/
│
├── models/
│   ├── db.js
│   └── Doacao.js
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── home.handlebars
│   ├── sobre.handlebars
│   ├── doacao.handlebars
│   ├── cad_doacao.handlebars
│   └── editar_doacao.handlebars
│
├── public/
│   ├── css/
│   ├── img/
│   └── *.html
│
├── appmain.js
├── db.js
├── package.json
└── .gitignore


---

## 🗄️ Banco de Dados

### 📌 Tabela: `doadores`

| Campo              | Tipo      | Descrição |
|--------------------|----------|----------|
| id                 | INTEGER  | Chave primária (auto incremento) |
| nome_doador        | VARCHAR  | Nome do doador |
| telefone_doador    | VARCHAR  | Telefone |
| email_Doador       | VARCHAR  | E-mail |
| nome_Alimento      | VARCHAR  | Nome do alimento |
| kg_Alimento        | VARCHAR  | Quantidade |
| createdAt          | DATETIME | Data de criação |
| updatedAt          | DATETIME | Data de atualização |

---

## 🔗 Rotas da Aplicação

| Método | Rota                  | Descrição |
|--------|-----------------------|----------|
| GET    | `/`                   | Página inicial |
| GET    | `/sobre`              | Informações do projeto |
| GET    | `/doacao`             | Lista de doações |
| GET    | `/cad-doacao`         | Formulário de cadastro |
| POST   | `/add-doacao`         | Criar nova doação |
| GET    | `/editar-doacao/:id`  | Formulário de edição |
| POST   | `/update-doacao`      | Atualizar doação |
| GET    | `/del-doacao/:id`     | Excluir doação |

---

## 🔄 Funcionalidades (CRUD)

- ✅ **Create**: Cadastrar nova doação  
- ✅ **Read**: Listar todas as doações  
- ✅ **Update**: Editar informações da doação  
- ✅ **Delete**: Excluir doação  

---

## 🎨 Views

A aplicação utiliza **Handlebars** como template engine:

- Layout principal: `main.handlebars`
- Páginas dinâmicas com `{{ }}` para renderização de dados
- Separação entre layout e conteúdo

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/yulamendes/DoaFacil_Projeto.git

### 2. Instale as dependências
```bash
npm install

### 3. Configure o banco de dados
No MySQL:
CREATE DATABASE Doacao;

Edite o arquivo db.js com suas credenciais:
new Sequelize('Doacao', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
})

### 4. Inicie o servidor
```bash
node appmain.js

### 5. Acesse no navegador
http://localhost:8090

---

## 👥 Equipe do Projeto

| Nome             | Responsabilidade |
|------------------|------------------|
| Caio Ferreira    | Rotas            |
| Daniel Tenorio   | Banco de Dados   |
| Fábio Santos     | Documentação     |
| Mariana Ferreira | Models           |
| Victor de Moraes | Interface(Botões)|
| Yula Mendes      | CRUD & Backend   |

---

## 🌍 Impacto Social
Este projeto está alinhado com a **Agenda 2030 da ONU**, especificamente com a:

**ODS 2 — Fome Zero e Agricultura Sustentável**

Demonstrando como a tecnologia pode ser usada para gerar impacto positivo na sociedade.

---

## 📌 Considerações Finais

O sistema inclui:

- CRUD completo funcional
- Integração com banco de dados
- Estrutura organizada em MVC
- Interface dinâmica com Handlebars

---

📎 Licença

**Este projeto é acadêmico e de uso educacional.**
