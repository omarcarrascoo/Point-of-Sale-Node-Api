const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash');
const yargs = require('yargs')


//inicializaciones
const app = express();
require('./database');
require('./passport/local-auth')

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'N@L@s*Fernanda',
    resave:false,
    saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) =>{
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.loginMessage = req.flash('loginMessage');
    app.locals.user = req.user;
    next();
})

//Routes
app.use('/',require('./routes/index.routes'))


//setting
app.set('views', path.join(__dirname, 'views') )
app.engine('ejs', engine);
app.set('view engine', 'ejs')
PORT = yargs.argv.PORT
// app.set('port', PORT.puerto || 2002);

//inicio de servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})