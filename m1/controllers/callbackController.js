const callbackController = async (req, res) => {
    try {
      // Verifique se o código de autorização está presente na consulta da URL
      const authorizationCode = req.query.code;
  
      // Verifique se o código de autorização foi recebido corretamente
      if (authorizationCode) {
        const axios = require('axios');
        

        const tokenEndpoint = 'http://localhost:3000/github/token'; 


        // Define as configurações para a solicitação HTTP POST
        const clientId = '8149bd792fa6e752b682'; 
        const clientSecret = '4272e8874ae0bccbc3d1d637b71eb1a85e6d6834'; 
        const redirectUri = 'http://localhost:3000/callback'; 
        const grantType = 'authorization_code';
 
        const response = await axios.post(tokenEndpoint, {
          grant_type: grantType,
          code: authorizationCode,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri
        });

        // Verifica se a solicitação foi bem-sucedida e retem o token de acesso
        if (response.status === 200) {
          const accessToken = response.data.access_token;
 
          const session = require('express-session');

            // Middleware de sessão
            app.use(session({
            secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
            resave: false,
            saveUninitialized: false
            }));

            // Rota de callback
            app.get('/callback', async (req, res) => {
            try {
                const authorizationCode = req.query.code;

                // Executa a lógica para trocar o código de autorização pelo token de acesso
                const accessToken = await exchangeAuthorizationCode(authorizationCode);

                // Verifica se o token de acesso foi obtido com sucesso
                if (accessToken) {
                // Armazena o token de acesso na sessão do usuário
                req.session.accessToken = accessToken;

                // Redireciona para a página principal ou para outra rota protegida
                res.redirect('/dashboard');
                } else {
                // Tratamento de erro caso a troca do código de autorização falhe
                res.status(500).send('Failed to exchange authorization code for access token');
                }
            } catch (error) {
                // Tratamento de erro caso ocorra uma exceção durante a troca do código de autorização
                console.error('Error during token exchange:', error);
                res.status(500).send('Error during token exchange');
            }
            });

              // Exemplo de uso da variável tokenEndpoint
            axios.post(tokenEndpoint, data)
            .then(response => {
              // Manipule a resposta do token endpoint
              res.send(response.data);
            })
            .catch(error => {
              // Manipule erros ao fazer a solicitação para o token endpoint
              console.error(error);
              res.status(500).send('Erro durante a troca de token');
            });

          req.session.accessToken = accessToken;
  
          // Redirecione para a página principal ou para outra rota protegida
          res.redirect('/dashboard');
        } else {
          // Tratamento de erro caso a solicitação não seja bem-sucedida
          console.error('Failed to exchange authorization code for access token:', response.data);
          res.status(500).send('Failed to exchange authorization code for access token');
        }
      } else {
        // Tratamento de erro caso o código de autorização não esteja presente na consulta da URL
        res.status(400).json({ error: 'Authorization code not found' });
      }
    } catch (error) {
      // Tratamento de erro caso ocorra uma exceção durante a solicitação
      console.error('Error during token exchange:', error);
      res.status(500).send('Error during token exchange');
    }
  };
  
  module.exports = callbackController;