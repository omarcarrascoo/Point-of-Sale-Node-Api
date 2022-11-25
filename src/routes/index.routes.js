const express = require ('express');
const passport = require('passport');
const router = express.Router();



router.get ('/', (req, res, next) => {
    res.render('index')
});

router.get('/signup', (req ,res, next) =>{
    res.render('signup');
})
router.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/productos',
    failureRedirect: '/signup',
    passReqToCallback: true
}))
router.get('/login', (req ,res, next) =>{
    res.render('login')
})
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/productos',
    failureRedirect: '/login',
    passReqToCallback: true
}))

router.get('/logout',(req, res, next) =>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})

router.get('/productos', isAuthenticated, (re,res,next)=>{
    res.render('products')
})
function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}




module.exports = router;