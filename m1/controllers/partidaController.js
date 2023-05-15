const Partida = require('../src/models/Partida');
const router = require('express').Router();



// Listar todas as partidas
exports.listarPartidas = (req, res) => {
  Partida.find()
    .then(partidas => res.json(partidas))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obter uma partida pelo ID
exports.obterPartida = (req, res) => {
  const partidaId = req.params.id;
  Partida.findById(partidaId)
    .then(partida => {
      if (!partida) {
        return res.status(404).json({ message: 'Partida não encontrada' });
      }
      res.json(partida);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Criar uma nova partida
exports.criarPartida = (req, res) => {
  const { timeA, timeB, placar } = req.body;
  const partida = new Partida({ timeA, timeB, placar });
  partida.save()
    .then(partidaCriada => res.status(201).json(partidaCriada))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Atualizar uma partida existente
exports.atualizarPartida = (req, res) => {
  const partidaId = req.params.id;
  const { timeA, timeB, placar } = req.body;
  Partida.findByIdAndUpdate(partidaId, { timeA, timeB, placar }, { new: true })
    .then(partidaAtualizada => {
      if (!partidaAtualizada) {
        return res.status(404).json({ message: 'Partida não encontrada' });
      }
      res.json(partidaAtualizada);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Excluir uma partida
exports.excluirPartida = (req, res) => {
  const partidaId = req.params.id;
  Partida.findByIdAndRemove(partidaId)
    .then(partidaRemovida => {
      if (!partidaRemovida) {
        return res.status(404).json({ message: 'Partida não encontrada' });
      }
      res.json({ message: 'Partida removida com sucesso' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = router;
