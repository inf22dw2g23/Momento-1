const express = require('express');
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

router.use(session({
  secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
  resave: true,
  saveUninitialized: true
}));


// Criar uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'web22023',
  database: 'plataforma_jogos_database',
});

// Rota de registro de novos usuários
router.post('/registro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Criptografar a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Salvar o usuário no banco de dados com a senha criptografada
    const query = `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`;
    const values = [nome, email, senhaCriptografada];
    
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Erro ao salvar o usuário no banco de dados:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
      
      // Resto da lógica de registro de usuário
      
      return res.status(200).json({ message: 'Usuário registrado com sucesso' });
    });
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
