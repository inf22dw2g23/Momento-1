// jogadorController.js

const Jogador = require('../src/models/Jogador');


// Listar todos os jogadores
exports.listarJogadores = (req, res) => {
  Jogador.find()
    .then(jogadores => res.json(jogadores))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obter um jogador pelo ID
exports.obterJogador = (req, res) => {
  const jogadorId = req.params.id;
  Jogador.findById(jogadorId)
    .then(jogador => {
      if (!jogador) {
        return res.status(404).json({ message: 'Jogador não encontrado' });
      }
      res.json(jogador);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Criar um novo jogador
exports.criarJogador = (req, res) => {
  const { nome, idade, posicao } = req.body;
  const jogador = new Jogador({ nome, idade, posicao });
  jogador.save()
    .then(jogadorCriado => res.status(201).json(jogadorCriado))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Atualizar um jogador existente
exports.atualizarJogador = (req, res) => {
  const jogadorId = req.params.id;
  const { nome, idade, posicao } = req.body;
  Jogador.findByIdAndUpdate(jogadorId, { nome, idade, posicao }, { new: true })
    .then(jogadorAtualizado => {
      if (!jogadorAtualizado) {
        return res.status(404).json({ message: 'Jogador não encontrado' });
      }
      res.json(jogadorAtualizado);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Excluir um jogador
exports.excluirJogador = (req, res) => {
  const jogadorId = req.params.id;
  Jogador.findByIdAndRemove(jogadorId)
    .then(jogadorRemovido => {
      if (!jogadorRemovido) {
        return res.status(404).json({ message: 'Jogador não encontrado' });
      }
      res.json({ message: 'Jogador removido com sucesso' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
