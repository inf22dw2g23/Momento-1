const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema({
  timeA: {
    type: String,
    required: true,
  },
  timeB: {
    type: String,
    required: true,
  },
  resultado: {
    type: String,
    required: true,
  },
});

const Partida = mongoose.model('Partida', partidaSchema);

module.exports = Partida;
