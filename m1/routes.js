const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const passport = require('./middleware/passport');


const jogadorController = require('./controllers/jogadorController');
const partidaController = require('./controllers/partidaController');
const authController = require('./controllers/authController');
const swaggerController = require('./controllers/swaggerController');



// Rotas para jogadorController
router.get('/jogadores/count', jogadorController.countJogadores);
router.get('/jogadores', jogadorController.retrieveJogadores);
router.post('/jogadores', jogadorController.createJogador);

router.get('/jogadores/:id', jogadorController.retrieveJogador);
router.put('/jogadores/:id', jogadorController.updateJogador);
router.delete('/jogadores/:id', jogadorController.deleteJogador);

// Rotas para partidaController
router.get('/partidas/count', partidaController.countPartidas);
router.get('/partidas', partidaController.retrievePartidas);
router.post('/partidas', partidaController.createPartida);

router.get('/partidas/:id', partidaController.retrievePartida);
router.put('/partidas/:id', partidaController.updatePartida);
router.delete('/partidas/:id', partidaController.deletePartida);

// Rotas de autenticação
router.get('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/', auth, authController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), authController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), authController.authCallback);
router.get('/me', auth, authController.me);
router.get('/githubme', auth, authController.gitHubMe);

// Rota para abrir o arquivo SwaggerController.js
router.get('/swagger', swaggerController.showSwaggerController);



module.exports = router;