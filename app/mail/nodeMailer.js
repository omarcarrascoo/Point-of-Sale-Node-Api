const nodemailer = require ('nodemailer')
require('dotenv').config()

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.Mail,
        pass:"nqoxqlifiaakccuf"
    }
})
let details = {
    from: process.env.Mail,
    to:  process.env.Mail,
    subject: "Se ha registrado una Usuario",
    text: "Se ha registrado un usuario"
}

function sendMail(){
    mailTransporter.sendMail(details,(err)=>{
        if (err) {
            console.error(err);
        }
        else{
            console.log("email has sent")
        }
    })
}
module.exports={
    sendMail,
    mailTransporter
}