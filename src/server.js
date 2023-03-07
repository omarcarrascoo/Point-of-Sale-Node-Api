const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')
const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash');
const { newComment } = require('./controllers/comments.controller')
const { readComments } = require('./DAOS/comments.dao')



//inicializaciones
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

require('./db/database');
require('./passport/local-auth')
//require('./service/user.service')

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
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views') )
app.engine('ejs', engine);
app.set('view engine', 'ejs')

const setComments = () =>{
    
}
const msj = session.comments
console.log(session.comments)
 io.on ('connection', (cliente)=>{
    console.log('Un cliente se conecto')
    cliente.emit('mensajes', msj)
    cliente.on('new-message', async mensaje =>{
        const comment = await newComment(mensaje)
        io.sockets.emit('mensajes', msj)
    })
})

// PORT = yargs.argv.PORT
PORT = 4000
// app.set('port', PORT.puerto || 2002);

//inicio de servidor
httpServer.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}) 