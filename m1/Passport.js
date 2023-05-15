router.use(passport.initialize());
router.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: '8149bd792fa6e752b682',
  clientSecret: '4272e8874ae0bccbc3d1d637b71eb1a85e6d6834',
  callbackURL: 'http://localhost:3000/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Aqui você pode verificar se o usuário já está registrado no seu banco de dados
  // e realizar as ações necessárias, como criar uma sessão de usuário ou atualizar informações no banco de dados

  // Exemplo de criação de sessão de usuário
  const user = {
    id: profile.id,
    username: profile.username,
    displayName: profile.displayName,
    // Outras informações do usuário
  };
  done(null, user);
}));

module.exports = passport;