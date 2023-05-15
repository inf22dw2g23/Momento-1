const express = require('express');
const router = express.Router();
const jogadorController = require('./controllers/jogadorController');
const partidaController = require('./controllers/partidaController');
const authController = require('./controllers/authController');

// Rotas para jogadores
router.get('/jogadores', jogadorController.listarJogadores);
router.get('/jogadores/:id', jogadorController.obterJogador);
router.post('/jogadores', jogadorController.criarJogador);
router.put('/jogadores/:id', jogadorController.atualizarJogador);
router.delete('/jogadores/:id', jogadorController.excluirJogador);

// Rotas para partidas
router.get('/partidas', partidaController.listarPartidas);
router.get('/partidas/:id', partidaController.obterPartida);
router.post('/partidas', partidaController.criarPartida);
router.put('/partidas/:id', partidaController.atualizarPartida);
router.delete('/partidas/:id', partidaController.excluirPartida);

// Rota de registro de usuário
router.post('/registro', authController.registrarUsuario);

// Rota de autenticação de usuário
router.post('/login', authController.autenticarUsuario);

module.exports = router;
