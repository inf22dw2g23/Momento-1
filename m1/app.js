require("dotenv").config();
const express = require('express');
const app = express();
const controllers = require('./controllers/controllers');
const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const session = require('express-session');
const JwtStrategy = require('passport-jwt').Strategy;
const jogadorController = require('./controllers/jogadorController');
const partidaController = require('./controllers/partidaController');
const authController = require('./controllers/authController');
const swaggerController = require('./controllers/swaggerController');
const dashboardController = require('./controllers/dashboardController');

const port = 3000;

// Configurar middleware de sessão
app.use(session({
  secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
  resave: false,
  saveUninitialized: false
}));

// Configurar Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Definir estratégia de autenticação local
passport.use(new LocalStrategy(

  (name, password, done) => {
    if (name === 'admin' && password === 'admin') {
      return done(null, { id: 1, name: 'admin' });
    } else {
      return done(null, false);
    }
  }
));

// Serialização e deserialização do usuário
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //Verifica o utilizador na bd com base no ID
  const users = { id: 1, name: 'admin' };
  done(null, users);
});




//rota para o swagger
app.get('/swagger', swaggerController.swaggerDefinition);


// Rotas para jogadores
app.get('/jogadores', jogadorController.listarJogadores);
app.get('/jogadores/:id', jogadorController.obterJogador);
app.post('/jogadores', jogadorController.criarJogador);
app.put('/jogadores/:id', jogadorController.atualizarJogador);
app.delete('/jogadores/:id', jogadorController.excluirJogador);


// Rotas para partidas
app.get('/partidas', partidaController.listarPartidas);
app.get('/partidas/:id', partidaController.obterPartida);
app.post('/partidas', partidaController.criarPartida);
app.put('/partidas/:id', partidaController.atualizarPartida);
app.delete('/partidas/:id', partidaController.excluirPartida);

// Configuração do JWT
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
};

// Rota para abrir o arquivo SwaggerController.js
router.get('/swagger',  swaggerController.showSwaggerController);


//rota dashboard
router.get('/dashboard', dashboardController);


// Configuração da estratégia JWT
passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    // Verificar o token e buscar o usuário no banco de dados
    const { userId } = payload;

    // Exemplo de busca do usuário no banco de dados
    User.findById(userId, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

// Adicione o middleware de autenticação do Passport
app.use(passport.initialize());

// Rota protegida
app.get('/api/recurso-protegido', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Lógica da rota protegida
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000...');
});