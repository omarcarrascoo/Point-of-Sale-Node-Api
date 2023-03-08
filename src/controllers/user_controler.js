const passport = require('passport');


//GET
const renderSignUp = (req, res, next) => {
    res.render('signup');
}
const renderLogin = (req, res, next) => {
    res.render('login')
}
const userLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}


//POST
const userSignUp = passport.authenticate('local-signup', {
    successRedirect: '/productos',
    failureRedirect: '/signup',
    passReqToCallback: true
})

const userLogin = passport.authenticate('local-login', {
    successRedirect: '/productos',
    failureRedirect: '/login',
    passReqToCallback: true
})


module.exports={
    renderSignUp,
    userSignUp,
    renderLogin, 
    userLogin,
    userLogout
}