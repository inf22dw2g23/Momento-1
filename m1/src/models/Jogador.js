const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  posicao: {
    type: String,
    required: true
  }
});

const Jogador = mongoose.model('Jogador', jogadorSchema);

module.exports = Jogador;
