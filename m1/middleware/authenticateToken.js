const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Obter o token de autenticação do cabeçalho da requisição
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // Token não fornecido
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  // Verificar e decodificar o token
  jwt.verify(token, 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865', (err, user) => {
    if (err) {
      // Token inválido
      return res.status(403).json({ error: 'Token de autenticação inválido' });
    }

    // Token válido, prosseguir para a próxima rota
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
