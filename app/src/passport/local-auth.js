const passport = require('passport');
const { sendMail } = require('../mail/nodeMailer');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})
passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const user = await User.findOne({
        username: username
    })
    if (user) {
        return done(null, false, req.flash('signupMessage', 'Este usuario ya esta en uso'));
    } else {
        const newUser = new User()
        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save()
        sendMail()
        done(null, newUser);
    }

}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const user = await User.findOne({
        username: username
    });
    if (!user) {
        return done(null, false, req.flash('loginMessage', 'Usuario incorrecto'));
    }
    if (!user.comparePassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));
    }
    done(null, user)
}))