const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Rota de registro de novos usuários
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Exemplo de código usando o pacote mysql2 para inserir os dados no MySQL
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    await db.query(query, [name, email, hashedPassword]);

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao registrar o usuário.' });
  }
});

// Rota de login de usuários existentes
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.query(query, [email]);
    const user = rows[0];

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Gerar token de autenticação
    const token = jwt.sign({ userId: user.id }, 'a1036fcd792a2bdcd885d653e393bbe16508dd0f5b74132b81911b18441ff9c3', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao fazer o login.' });
  }
});

module.exports = router;