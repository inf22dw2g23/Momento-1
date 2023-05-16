const auth = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

module.exports = auth;

const isAuthenticated = (req, res, next) => {
  // Verifica se o utilizador está autenticado
  if (req.user && req.isAuthenticated()) {
    // Se o utilizador estiver autenticado, permite o acesso à rota protegida
    return next();
  }
  
  // Se o utilizador não estiver autenticado, redireciona para a página de login ou retorna um erro
  res.redirect('/login'); 
};


module.exports = isAuthenticated;