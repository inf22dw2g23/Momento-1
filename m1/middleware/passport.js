const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "8149bd792fa6e752b682";
const GITHUB_CLIENT_SECRET = "4272e8874ae0bccbc3d1d637b71eb1a85e6d6834";
const GITHUB_CALLBACK_URL = "http://localhost:3000/callback";

const passportOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
};

// Serialization and Deserialization functions (required for persistent sessions)
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
  
passport.use(new GitHubStrategy(passportOptions, function (accessToken, refreshToken, profile, done) {
    profile.token = accessToken;
    return done(null, profile);
}));

module.exports = passport;