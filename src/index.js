const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config({path:__dirname+'/src/'})

//inicializaciones
const app = express();
require('./database')
//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
//Routes
app.use('/',require('./routes/index.routes'))
//setting
app.set('views', path.join(__dirname, 'views') )
app.engine('ejs', engine);
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 2002);

//inicio de servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})