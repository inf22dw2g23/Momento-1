const crypto = require('crypto');
const config = require('./config');
const secretKey = config.secretKey;

module.exports = {
    secretKey: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865'
  };


const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString('hex');
  console.log('Chave secreta:', secretKey);
};

generateSecretKey();
