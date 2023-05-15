require("dotenv").config();
const express = require('express');
const passport = require('passport');
const app = express();
const routes = require('./routes');
const authController = require('./controllers/authController');

// Rota de registro de usuário
app.post('/register', authController.register);

// Rota de autenticação
app.get('/auth/github', passport.authenticate('github'));

// Rota de callback para tratamento da resposta do GitHub
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  // Redirecionar o usuário para a página desejada após a autenticação bem-sucedida
  res.redirect('/home');
});

// Use as rotas definidas no arquivo routes.js
app.use('/', routes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000...');
});

module.exports = app;