const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();

// Configurar a estratégia do Passport.js com o GitHub
passport.use(new GitHubStrategy({
  clientID: '8149bd792fa6e752b682',
  clientSecret: '4272e8874ae0bccbc3d1d637b71eb1a85e6d6834',
  callbackURL: 'http://localhost:3000/callback'
}, (accessToken, refreshToken, profile, done) => {
}));

// Configurar as sessões
app.use(session({
  secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
  resave: false,
  saveUninitialized: false
}));

// Inicializa o Passport
app.use(passport.initialize());
app.use(passport.session());

// Definir as rotas

app.get('/github/login', passport.authenticate('github'));

app.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Autenticação bem-sucedida, redirecionar ou responder com uma mensagem
    res.redirect('/dashboard');
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
app.listen(3000, () => {
  console.log('Servidor está em execução na porta 3000');
});