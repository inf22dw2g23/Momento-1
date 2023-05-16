require("dotenv").config();
const express = require('express');
const passport = require('passport');
const app = express();
const routes = require('./routes');
const config = require("./configs/env");


// Middleware para processar dados JSON
app.use(express.json());

app.post('/register', (req, res) => {
  // Extrair os dados do corpo da requisição
  const { nome, email, senha } = req.body;
  
  // Retornar a resposta adequada
  if (nome && email && senha) {
    res.status(200).json({ message: 'Registo realizado com sucesso!' });
  } else {
    res.status(400).json({ message: 'Falha no registo. Verifique os dados fornecidos.' });
  }
});

// Rota de autenticação com GitHub
app.get('/auth/github', passport.authenticate('github'));

// Rota de callback para tratamento da resposta do GitHub
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  // Redirecionar o usuário para a página desejada após a autenticação bem-sucedida
  res.redirect('/home');
});

// Middleware de autenticação
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

//logout 

app.get('/logout', (req, res) => {
  req.logout(); // Essa função é fornecida pelo Passport para fazer o logout do usuário
  res.redirect('/'); // Redirecione o usuário para a página inicial ou qualquer outra página desejada após o logout
});


// Rota protegida que requer autenticação
app.get('/profile', ensureAuthenticated, (req, res) => {
  // Aqui você pode acessar req.user para obter os dados do usuário autenticado
  res.send('Bem-vindo ao seu perfil!');
});

// Use as rotas definidas no arquivo routes.js
app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Servidor rodando na porta ${config.port}...`);
});

module.exports = app;