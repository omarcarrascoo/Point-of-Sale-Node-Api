const mongoose = require("mongoose");
require('dotenv').config()
// const {mongodb} = require('./keys')

//mongodb.URI
mongoose.connect(process.env.URI,{})
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err => console.error(err))