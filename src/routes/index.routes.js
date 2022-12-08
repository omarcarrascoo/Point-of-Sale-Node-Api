const express = require('express');
const passport = require('passport');
const router = express.Router();
const {fork} = require('child_process')


router.get('/', (req, res, next) => {
    res.render('index')
});


router.get('/info', (req, res, next) => {
    res.render('info')
    console.log('Directorio actual de trabajo:', process.cwd())
    console.log('id del proceso: ', process.pid)
    // process.exit()
    // console.log(process.ppid) 
    console.log('version de node: ', process.version)
    console.log('titulo del proceso: ', process.title)
    console.log('Sistema Operativo: ', process.platform)
    console.log('Uso de la memoria: ', process.memoryUsage())

});


router.get('/api/random:num',(req,res,next)=>{
    const num = req.params.num;
    const child = fork('./src/randomChild/calculoChild.js')
    child.send(num)
    child.on("message", (message)=>{
        console.log(message);
        res.json(message)
    })
    child.on("exit", (code) =>{
        console.log('Child Exit with code', code);
    })
})


router.get('/signup', (req, res, next) => {
    res.render('signup');
})
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/productos',
    failureRedirect: '/signup',
    passReqToCallback: true
}))


router.get('/login', (req, res, next) => {
    res.render('login')
})
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/productos',
    failureRedirect: '/login',
    passReqToCallback: true
}))
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
})


router.get('/productos', isAuthenticated, (re, res, next) => {
    res.render('products')
})

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}






module.exports = router;