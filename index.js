const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
    res.send('Olá Docker! Atualização!')
});*/

app.get('/login', (req, res) => {
    // Redirecione para a página de login
    res.redirect('m1\public\login.html');
});

app.listen(port, () => {
    console.log('App a utilizar a porta: ${port}')
})