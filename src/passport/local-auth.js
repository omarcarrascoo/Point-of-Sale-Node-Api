const passport = require('passport');
const LocalStrategy = require('passport-strategy').Strategy;

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done)={
    
}))
